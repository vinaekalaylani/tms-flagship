import NavbarComp from "../components/navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

export default function Dashboard({ handleSidebar }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  );

  const optionsCPC = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    }
  };

  const dataCPC = {
    labels: ['10.', '100.', '50.'],
    datasets: [
      {
        label: 'UNSORTED',
        data: [20, 170, 50],
        backgroundColor: '#2e4057',
      },
      {
        label: 'UNPROCESSED',
        data: [10, -580, 10],
        backgroundColor: '#76ADF5',
      },
      {
        label: 'PACKED',
        data: [10, 10, 10],
        backgroundColor: '#FF8364',
      },
    ],
  };

  const dataMComp = {
    labels: ['10.', '100.', '50.', 'Coins'],
    datasets: [
      {
        data: [12, 20, 3, 5],
        backgroundColor: [
          '#2e4057',
          '#76ADF5',
          '#FF8364',
          '#CDD5E0',
        ],
        borderColor: [
          '#2e4057',
          '#76ADF5',
          '#FF8364',
          '#CDD5E0',
        ],
        borderWidth: 1
      },
    ],
  }

  return (
    <div id="main">
      <NavbarComp handleSidebar={handleSidebar} />
      <div className="p-5 bg-primary" ></div>
      <div className="page-content" style={{ marginTop: "-5rem" }}>
        <section>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card p-4">
                <div className="text-card">Money Composition</div>
                <div className="card-body px-0">
                  <Pie data={dataMComp} options={{ maintainAspectRatio: false }}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4 m-md-0">
              <div className="card p-4">
                <div className="text-card">Money Condition</div>
                <div className="card-body px-0">
                  <Pie data={dataMComp} options={{ maintainAspectRatio: false }}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4 m-md-0">
              <div className="card p-4">
                <div className="text-card">Money Position</div>
                <div className="card-body px-0">
                  <Pie data={dataMComp} options={{ maintainAspectRatio: false }}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-md-8">
              <div className="card p-4">
                <div className="text-card">CPC Process Status</div>
                <div className="card-body" style={{ height: '450px' }}>
                  <Bar options={optionsCPC} data={dataCPC} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4 m-md-0">
              <div className="card p-4">
                <div className="text-card">Pre-Vault Process Status</div>
                <div className="card-body px-0">
                  <Pie data={dataMComp} options={{ maintainAspectRatio: false }}/>
                </div>
              </div>
              <div className="card p-4 mt-3">
                <div className="text-card">Vault Process Status</div>
                <div className="card-body px-0">
                  <Pie data={dataMComp} options={{ maintainAspectRatio: false }}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
