export const TotalCustomerSeries = [
  {
    name: "total",
    data: [124, 115, 183, 85, 143],
  }
];
export const MonthSeries = [
  {
    name: "total",
    data: [124, 115, 85, 143, 183],
  }
];

export const customerOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  // eslint-disable-next-line no-unused-vars
  colors: [function ({ value, seriesIndex, w }) {
    const maxValue = Math.max.apply(null, w.config.series[0].data)

    if (value >= maxValue) {
      return "#2F80ED"
    } else {
      return "#A0D7E7"
    }
  }],
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: false,
      columnWidth: "100%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    labels: {
      show: false,
    }
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      },
    },
  },
  title: {
    show: false
  }
};