import React from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


function App() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      concertID: 3, 
      quantity: 1,
    }
  });
  const navigate = useNavigate();

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
        reset();
        navigate("/confirmation");
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
      <img className="col-span-6 rounded-md mx-5 my-10"src="blink182.jpg"></img>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-md shadow-md col-span-6 p-8 mx-10 my-10 space-y-4"
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

        {/* Email */}
        <div className="col-span-12">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            id="email"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        {/* Name */}
        <div className="col-span-12">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            id="name"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div className="col-span-12">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
            Phone
          </label>
          <input
            {...register("phone", { required: "Phone is required" })}
            placeholder="Phone"
            id="phone"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Quantity */}
        <div className="col-span-12">
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700">
            Quantity
          </label>
          <input
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Minimum 1 ticket" },
              max: { value: 6, message: "Maximum 6 tickets" }
            })}
            type="number"
            placeholder="Quantity"
            id="quantity"
            className="border border-gray-300 p-2 rounded w-full"
            min="1"
            max="6"
          />
          {errors.quantity && <p className="text-red-600 text-sm">{errors.quantity.message}</p>}
        </div>

        {/* Credit Card */}
        <div className="col-span-12">
          <label htmlFor="creditCard" className="block text-sm font-semibold text-gray-700">
            Credit Card Number
          </label>
          <input
            {...register("creditCard", { required: "Credit card number is required" })}
            placeholder="Credit Card Number"
            id="creditCard"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.creditCard && <p className="text-red-600 text-sm">{errors.creditCard.message}</p>}
        </div>

        {/* Expiration */}
        <div className="col-span-12">
          <label htmlFor="expiration" className="block text-sm font-semibold text-gray-700">
            MM/YY
          </label>
          <input
            {...register("expiration", { required: "Expiration date is required" })}
            placeholder="Expiration Date"
            id="expiration"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.expiration && <p className="text-red-600 text-sm">{errors.expiration.message}</p>}
        </div>

        {/* CVV */}
        <div className="col-span-12">
          <label htmlFor="securityCode" className="block text-sm font-semibold text-gray-700">
            CVV
          </label>
          <input
            {...register("securityCode", { required: "CVV is required" })}
            placeholder="CVV"
            id="securityCode"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.securityCode && <p className="text-red-600 text-sm">{errors.securityCode.message}</p>}
        </div>

        {/* Address */}
        <div className="col-span-12">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
            Address
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            placeholder="Address"
            id="address"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
        </div>

        {/* City */}
        <div className="col-span-12">
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
            City
          </label>
          <input
            {...register("city", { required: "City is required" })}
            placeholder="City"
            id="city"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
        </div>

        {/* Province */}
        <div className="col-span-12">
          <label htmlFor="province" className="block text-sm font-semibold text-gray-700">
            Province
          </label>
          <select
            {...register("province", { required: "Province is required" })}
            id="province"
            className="border text-gray-400 border-gray-300 p-2 rounded w-full"
          >
            <option value="">Select a province</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
          </select>
          {errors.province && <p className="text-red-600 text-sm">{errors.province.message}</p>}
        </div>

        {/* Postal Code */}
        <div className="col-span-12">
          <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-700">
            Postal Code
          </label>
          <input
            {...register("postalCode", { required: "Postal code is required" })}
            placeholder="Postal Code"
            id="postalCode"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.postalCode && <p className="text-red-600 text-sm">{errors.postalCode.message}</p>}
        </div>

        {/* Country */}
        <div className="col-span-12">
          <label htmlFor="country" className="block text-sm font-semibold text-gray-700">
            Country
          </label>
          <input
            {...register("country", { required: "Country is required" })}
            placeholder="Country"
            id="country"
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.country && <p className="text-red-600 text-sm">{errors.country.message}</p>}
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
