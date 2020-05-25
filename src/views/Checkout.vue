<template>
  <div id="dropin-wrapper">
    <div id="checkout-message">
      Confirm your payment of <b>{{ total }} .- CHF</b> to the M150 Web Shop
    </div>
    <div id="dropin-container"></div>
    <div id="submit-button" @click="submit">Confirm payment</div>
    <div id="cancel-button" @click="cancel">Cancel payment</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authorization: "",
      container: "",
    };
  },
  mounted: function() {
    console.log("Checkout mounted...");

    braintree.dropin.create({
      // Insert your tokenization key here
      authorization: "sandbox_mfzqwfgb_gjmpc5vgfvwb4hjg",
      container: "#dropin-container",
    });
  },
  computed: {
    total() {
      let total = 0;
      for (
        let index = 0;
        index < this.$store.state.cart.items.length;
        index++
      ) {
        const product = this.$store.state.cart.items[index];
        total += Number(product.price);
      }
      return total;
    },
  },
  methods: {
    submit() {
      instance.requestPaymentMethod(function(requestPaymentMethodErr, payload) {
        // When the user clicks on the 'Submit payment' button this code will send the
        // encrypted payment information in a variable called a payment method nonce
        $.ajax({
          type: "POST",
          url: "/checkout",
          data: { paymentMethodNonce: payload.nonce },
        }).done(function(result) {
          // Tear down the Drop-in UI
          instance.teardown(function(teardownErr) {
            if (teardownErr) {
              console.error("Could not tear down Drop-in UI!");
            } else {
              console.info("Drop-in UI has been torn down!");
              // Remove the 'Submit payment' button
              $("#submit-button").remove();
            }
          });

          if (result.success) {
            $("#checkout-message").html(
              '<h1>Success</h1><p>Your Drop-in UI is working! Check your <a href="https://sandbox.braintreegateway.com/login">sandbox Control Panel</a> for your test transactions.</p><p>Refresh to try another transaction.</p>'
            );
          } else {
            console.log(result);
            $("#checkout-message").html(
              "<h1>Error</h1><p>Check your console.</p>"
            );
          }
        });
      });
    },
    cancel() {
      this.$router.push({ path: "products" });
    },
  },
};
</script>

<style>
#dropin-wrapper {
  width: 25vw;
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
}
#submit-button {
  background-color: orange;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  transition: all 0.1s;
  cursor: pointer;
}
#cancel-button {
  margin-top: 10px;
  background-color: black;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  transition: all 0.1s;
  cursor: pointer;
  color: white;
}
#submit-button:hover {
  color: white;
  transform: scale(1.01);
}
#cancel-button:hover {
  color: white;
  transform: scale(1.01);
}
</style>
