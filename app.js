var app = new Vue({
  el: "#app",
  data: {
    title: "Traffic light demo",
    isClicked: false,
    turnYellow: false,
    redLight: {
      activeColor: "red",
      inactiveColor: "black"
    },
    yellowLight: {
      activeColor: "yellow",
      inactiveColor: "black"
    },
    greenLight: {
      activeColor: "green",
      inactiveColor: "black"
    }
  },
  methods: {
    changeLightColor() {
      var v = this;
      v.isClicked = true;
      setTimeout(function () {
        v.turnYellow = true;
      }, 2000);
    }
  }
});
