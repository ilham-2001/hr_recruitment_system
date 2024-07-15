import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const column = [
  'No',
  'Acknowledgement weakness',
  'Communication skill',
  'Salary',
  'Acknowledgement Strength',
  'Vision mission',
  'Stress management',
  'Full name',
  'Email',
];

const columnRanking = [
  'Full name',
  'Email',
  'Final Score',
  'Rank',
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [interviewData, setInterviewData] = useState([]);
  const [rankingData, setRankingData] = useState([]);


  const getInterviewData = async (hr_id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/recruitments/result/${hr_id}`,
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      setInterviewData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const rankButtonClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/rank_candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(interviewData.data),
      });
      const data = await response.json();
      console.log(data);
      setRankingData(data.ranked_candidates);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const hr_login = localStorage.getItem('hr_login');
    const hr_id = JSON.parse(localStorage.getItem('user_login')).id;

    if (hr_login === null) {
      navigate('/login');
    }

    getInterviewData(hr_id);
  }, []);

  const applicants = [
    { id: 1, name: 'Ayu Putri' },
    { id: 2, name: 'Budi Santoso' },
    { id: 3, name: 'Citra Dewi' },
    { id: 4, name: 'Dedi Firmansyah' },
  ];

  return (
    <div className='bg-gray-100 min-h-screen'>
      <header className='bg-blue-500 shadow'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-semibold text-white'>
              HR Recruiter Dashboard
            </div>
            <nav>
              <a href='#dashboard' className='text-white hover:opacity-60 mx-4'>
                Dashboard
              </a>
              <a href='#profile' className='text-white hover:opacity-60 mx-4'>
                Profile
              </a>
              <a href='#settings' className='text-white hover:opacity-60 mx-4'>
                Settings
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className='container mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
          <div className='bg-white shadow rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Total Applicants
            </h3>
            <p className='text-3xl font-bold text-blue-500'>
              {interviewData.length === 0 ? 0 : interviewData.data.length}
            </p>
          </div>
          <div className='bg-white shadow rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Reviewed Applications
            </h3>
            <p className='text-3xl font-bold text-green-500'>
              {
                applicants.filter(
                  (applicant) => applicant.status === 'Reviewed'
                ).length
              }
            </p>
          </div>
          <div className='bg-white shadow rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Pending Applications
            </h3>
            <p className='text-3xl font-bold text-yellow-500'>
              {
                applicants.filter((applicant) => applicant.status === 'Pending')
                  .length
              }
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 bg-white shadow rounded-lg p-6 overflow-x-auto max-w-[100vw]'>
          <div className='flex justify-between'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Applicants
            </h3>
            <button
              onClick={rankButtonClick}
              type='button'
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
              Rank
            </button>
          </div>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                {column.map((it, index) => {
                  return (
                    <th
                      key={index}
                      className='py-2 px-4 border-b border-gray-200'>
                      {it}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {interviewData.data &&
                interviewData.data.map((it, index) => {
                  return (
                    <tr key={index}>
                      <td className='font-semibold py-2 px-4 border-b border-gray-200'>
                        {index + 1}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.self_acknowledgement_weakness_score}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.communication_skill_score}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.salary}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.self_acknowledgement_strength_score}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.vision_mission_score}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.stress_management_score}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.full_name}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.email}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {rankingData.length === 0? <p>Ranking is here</p> :
        <div className='flex flex-col gap-4 bg-white shadow rounded-lg p-6 overflow-x-auto max-w-[100vw]'>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Ranking</h3>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                {columnRanking.map((it, index) => {
                  return (
                    <th
                      key={index}
                      className='py-2 px-4 border-b border-gray-200'>
                      {it}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rankingData &&
                rankingData.map((it, index) => {
                  return (
                    <tr key={index}>
                      <td className='font-semibold py-2 px-4 border-b border-gray-200'>
                        {index + 1}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.full_name}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.email}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.final_score}
                      </td>
                      <td className='py-2 px-4 border-b border-gray-200'>
                        {it.Rank}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        }
      </main>
    </div>
  );
};

export default Dashboard;
