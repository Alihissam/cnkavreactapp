import React from "react";

const SubscriptionsPage = () => {
  const handleRestartSubscription = (subscriptionType) => {
    // Logic to restart the subscription
    alert(`Restarting ${subscriptionType} subscription`);
  };

  const handleEndSubscription = (subscriptionType) => {
    // Logic to end the subscription
    alert(`Ending ${subscriptionType} subscription`);
  };

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-4xl font-black mt-40 mb-6 text-white">
        Monthly Subscriptions Manager
      </h1>

      <section className="bg-black shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Exclusive Room</h2>
        <div className="pt-6 ">
          <button
            type="submit"
            className=" w-full bg-black my-4 text-white py-3 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            Restart Monthly Subscription
          </button>
          <button
            type="submit"
            className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            End Monthly Subscription
          </button>
        </div>
      </section>

      <section className="bg-black shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Cnkav Subscription</h2>
        <div className="pt-6 ">
          <button
            type="submit"
            className=" w-full bg-black my-4 text-white py-3 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            Restart Monthly Subscription
          </button>
          <button
            type="submit"
            className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            End Monthly Subscription
          </button>
        </div>
      </section>

      <section className="bg-black shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-semibold mb-4">Influewave Subscription</h2>
        <div className="pt-6 ">
          <button
            type="submit"
            className=" w-full bg-black my-4 text-white py-3 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            Restart Monthly Subscription
          </button>
          <button
            type="submit"
            className="rounded-3xl w-full bg-black text-white py-3 px-4 font-bold"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(120deg, red, yellow)",
              borderImageSlice: 1,
            }}
          >
            End Monthly Subscription
          </button>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionsPage;
