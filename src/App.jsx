import React from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

function App() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      concertID: 3, 
      quantity: 1,
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://nscc-0232209-tickethub-api-bcdxhjdbbec3b3gp.canadacentral-01.azurewebsites.net/api/purchaseinfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert(
          "Purchase completed successfully! Please check your email to receive your tickets."
        );
        reset();
      } else {
        console.error("Failed to submit", await response.text());
      }
    } catch (error) {
      console.error("Error submitting purchase", error);
    }
  };

  return (
    <div>
    <Header/>
    <div className="min-h-screen bg-black grid grid-cols-12">
      <img className="col-span-6 mx-5 my-10"src="blink182.jpg"></img>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md col-span-6 p-8 mx-10 my-10 space-y-4"
      >
        <h2 className="col-span-12 text-2xl font-bold mb-10 ">
          Complete the Purchase Form Below
        </h2>

        <div className="col-span-12">
          <input
            {...register("concertID", { required: true })}
            type="hidden"
            placeholder="Concert ID"
            id="concertID"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            id="email"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            id="name"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone
          </label>
          <input
            {...register("phone", { required: true })}
            placeholder="Phone"
            id="phone"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="quantity"
            className="block text-sm font-semibold text-gray-700"
          >
            Quantity
          </label>
          <input
            {...register("quantity", { required: true, min: 1 })}
            type="number"
            placeholder="Quantity"
            id="quantity"
            className="border border-gray-300 p-2 rounded w-full"
            min="1"
            max="6"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="creditCard"
            className="block text-sm font-semibold text-gray-700"
          >
            Credit Card Number
          </label>
          <input
            {...register("creditCard", { required: true })}
            placeholder="Credit Card Number"
            id="creditCard"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="expiration"
            className="block text-sm font-semibold text-gray-700"
          >
            MM/YY
          </label>
          <input
            {...register("expiration", { required: true })}
            placeholder="Expiration Date"
            id="expiration"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="securityCode"
            className="block text-sm font-semibold text-gray-700"
          >
            CVV
          </label>
          <input
            {...register("securityCode", { required: true })}
            placeholder="CVV"
            id="securityCode"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-700"
          >
            Address
          </label>
          <input
            {...register("address", { required: true })}
            placeholder="Address"
            id="address"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="city"
            className="block text-sm font-semibold text-gray-700"
          >
            City
          </label>
          <input
            {...register("city", { required: true })}
            placeholder="City"
            id="city"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="province"
            className="block text-sm font-semibold text-gray-700"
          >
            Province
          </label>
          <input
            {...register("province", { required: true })}
            placeholder="Province"
            id="province"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="postalCode"
            className="block text-sm font-semibold text-gray-700"
          >
            Postal Code
          </label>
          <input
            {...register("postalCode", { required: true })}
            placeholder="Postal Code"
            id="postalCode"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <div className="col-span-12">
          <label
            htmlFor="country"
            className="block text-sm font-semibold text-gray-700"
          >
            Country
          </label>
          <input
            {...register("country", { required: true })}
            placeholder="Country"
            id="country"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="col-span-12 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Purchase
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
