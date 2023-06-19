import React from "react";

const Seller = () => {
  return (
    <div className="border-4 bg-pink-100">
      <h6 className="text-2xl font-serif text-yellow-700 mt-5 text-center py-5">
        Best Seller In The year
      </h6>
      <div className="lg:flex grid grid-cols-1 gap-32  m-5 py-4 justify-center">
        <div class="text-center">
          <img
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            class="mx-auto mb-4 w-32 rounded-lg hover:scale-125"
            alt="Avatar"
          />
          <h5 class="mb-2 text-xl font-medium leading-tight">John Doe</h5>
          <p class="text-neutral-500 dark:text-neutral-400">Mermaid Seller</p>
        </div>
        <div class="text-center">
          <img
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
            class="mx-auto mb-4 w-32 rounded-lg hover:scale-75"
            alt="Avatar"
          />
          <h5 class="mb-2 text-xl font-medium leading-tight">John Glu</h5>
          <p class="text-neutral-500 dark:text-neutral-400">Princess Seller</p>
        </div>
        <div class="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhVw9dcAQoNFKKtrf7D_LYNDNqUnB7q8pLG4HRk9e8x5mMKf40ldaANlU24Bc6qY2iFY&usqp=CAU"
            class="mx-auto mb-4 w-32 rounded-lg hover:scale-125"
            alt="Avatar"
          />
          <h5 class="mb-2 text-xl font-medium leading-tight">Ima John</h5>
          <p class="text-neutral-500 dark:text-neutral-400">Frozen Seller</p>
        </div>
        <div class="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBintDkigpmYvjhmI8IuGlBoMthL-BzknWCS-yRL5SqwfhfhkYN3g_RgBTv9CAMB4mq0&usqp=CAU"
            class="mx-auto mb-4 w-32 rounded-lg hover:scale-75"
            alt="Avatar"
          />
          <h5 class="mb-2 text-xl font-medium leading-tight">John Eod</h5>
          <p class="text-neutral-500 dark:text-neutral-400">Barbie Seller</p>
        </div>
      </div>
    </div>
  );
};

export default Seller;
