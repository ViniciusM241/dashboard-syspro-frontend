import React from "react";
import {
  Container,
  ItemContainer,
} from './styles';

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

function RegionsContainer({
  data,
}) {
  const keys = Object.keys(data);

  return (
    <Container>
      {
        keys.map((item, index) => {
          const chartData = {
            datasets: [
              {
                data: [data[item].bin, data[item].notBin],
                backgroundColor: [
                  "#54C112",
                  "#C4C4C4",
                ],
                display: true,
                borderColor: "#FFF"
              }
            ]
          };

          return (
            <ItemContainer key={index}>
              <div style={{position: 'relative'}}>
                <Doughnut
                  data={chartData}
                  options={{
                    plugins: {
                      legend: {
                        display: false
                      },
                      tooltip: {
                        enabled: false
                      }
                    },
                    rotation: -90,
                    circumference: 180,
                    cutout: "70%",
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                  width={'100%'}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                  }}
                >
                  <p className="percent">{data[item].percent}</p>
                </div>
              </div>
              <p className="name">{item} <span style={{ fontSize: '10px' }}>({data[item].total})</span></p>
            </ItemContainer>
          );
        })
      }
    </Container>
  );
}

export default RegionsContainer;
