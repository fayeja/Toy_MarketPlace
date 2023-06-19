const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5500;

// middleware
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ow0xyg9.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const mermaidCollection = client.db("monarch").collection("mermaid");
    const princessCollection = client.db("monarch").collection("princess");
    const frozenCollection = client.db("monarch").collection("frozen");

    // ----------------------------------------------------------------
    // post operation
    app.post("/mermaid", async (req, res) => {
      const mermaid = req.body;
      console.log(mermaid);
      const result = await mermaidCollection.insertOne(mermaid);
      res.send(result);
    });

    app.post("/princess", async (req, res) => {
      const princess = req.body;
      console.log(princess);
      const result = await princessCollection.insertOne(princess);
      res.send(result);
    });

    app.post("/frozen", async (req, res) => {
      const frozen = req.body;
      console.log(frozen);
      const result = await frozenCollection.insertOne(frozen);
      res.send(result);
    });

    // ----------------------------------------------------------------
    // get operation
    app.get("/mermaid", async (req, res) => {
      const cursor = mermaidCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/princess", async (req, res) => {
      const cursor = princessCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/frozen", async (req, res) => {
      const cursor = frozenCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //   ----------------------------------------------------------------
    //   email via get
    app.get("/mermaid/mydoll/:email", async (req, res) => {
      const cursor = mermaidCollection.find({
        seller_email: req.params.email,
      });
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/frozen/mydoll/:email", async (req, res) => {
      const cursor = frozenCollection.find({
        seller_email: req.params.email,
      });
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/princess/mydoll/:email", async (req, res) => {
      const cursor = princessCollection.find({
        seller_email: req.params.email,
      });
      const result = await cursor.toArray();
      res.send(result);
    });

    // ----------------------------------------------------------------
    // sort operation
    app.get("/sortAsc/:email", async (req, res) => {
      const cursor = frozenCollection
        .find({
          seller_email: req.params.email,
        })
        .sort({ price: 1 });
      let result = await cursor.toArray();
      const cursor2 = princessCollection
        .find({
          seller_email: req.params.email,
        })
        .sort({ price: 1 });
      const result2 = await cursor2.toArray();
      const cursor3 = mermaidCollection
        .find({
          seller_email: req.params.email,
        })
        .sort({ price: 1 });
      const result3 = await cursor3.toArray();
      result = result.concat(result2, result3);
      result.sort((a, b) => a.price - b.price);
      res.send(result);
    });

    app.get("/sortDsc/:email", async (req, res) => {
      const cursor = frozenCollection
        .find({
          seller_email: req.params.email,
        })
        .sort({ price: -1 });
      let result = await cursor.toArray();
      const cursor2 = princessCollection
        .find({
          seller_email: req.params.email,
        })
        .sort({ price: -1 });
      const result2 = await cursor2.toArray();
      const cursor3 = mermaidCollection
        .find({
          seller_email: req.params.email,
        })
        .sort({ price: -1 });
      const result3 = await cursor3.toArray();
      result = result.concat(result2, result3);
      result.sort((a, b) => b.price - a.price);
      res.send(result);
    });

    // ----------------------------------------------------------------
    // id via get
    app.get("/mermaid/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          _id: 1,
          picture: 1,
          price: 1,
          rating: 1,
          name: 1,
          view_details: 1,
          available_quantity: 1,
          details_description: 1,
          sub_category: 1,
        },
      };
      const result = await mermaidCollection.findOne(query, options);
      res.send(result);
    });

    // princess

    app.get("/princess/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          _id: 1,
          picture: 1,
          price: 1,
          rating: 1,
          name: 1,
          view_details: 1,
          available_quantity: 1,
          details_description: 1,
          sub_category: 1,
        },
      };

      const result = await princessCollection.findOne(query, options);
      res.send(result);
    });

    //   frozen

    app.get("/frozen/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          _id: 1,
          picture: 1,
          price: 1,
          rating: 1,
          name: 1,
          view_details: 1,
          available_quantity: 1,
          details_description: 1,
          sub_category: 1,
        },
      };

      const result = await frozenCollection.findOne(query, options);
      res.send(result);
    });

    // search by name
    app.get("/search/:name", async (req, res) => {
      const cursor = princessCollection.find({
        name: req.params.name,
      });
      let result = await cursor.toArray();
      const cursor2 = mermaidCollection.find({
        name: req.params.name,
      });
      const result2 = await cursor2.toArray();
      const cursor3 = frozenCollection.find({
        name: req.params.name,
      });
      const result3 = await cursor3.toArray();
      result = result.concat(result2.concat(result3));
      res.send(result);
    });

    //   delete operation
    app.delete("/princess/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await princessCollection.deleteOne(query);
      res.send(result);
    });

    app.delete("/frozen/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await frozenCollection.deleteOne(query);
      res.send(result);
    });

    app.delete("/mermaid/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mermaidCollection.deleteOne(query);
      res.send(result);
    });

    //   update operation

    app.put("/mermaid/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };
      const UpdateUser = {
        $set: {
          price: user.price,
          available_quantity: user.available_quantity,
          details_description: user.details_description,
        },
      };

      const result = await mermaidCollection.updateOne(
        filter,
        UpdateUser,
        option
      );

      res.send(result);
    });
    app.put("/princess/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };
      const UpdateUser = {
        $set: {
          price: user.price,
          available_quantity: user.available_quantity,
          details_description: user.details_description,
        },
      };

      const result = await princessCollection.updateOne(
        filter,
        UpdateUser,
        option
      );

      res.send(result);
    });
    app.put("/frozen/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };
      const UpdateUser = {
        $set: {
          price: user.price,
          available_quantity: user.available_quantity,
          details_description: user.details_description,
        },
      };

      const result = await frozenCollection.updateOne(
        filter,
        UpdateUser,
        option
      );

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Monarch server is running");
});

app.listen(port, () => {
  console.log(`Monarch Server is running on port ${port}`);
});
