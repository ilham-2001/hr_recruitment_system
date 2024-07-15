import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navigation from '../../components/Navigation';

const Profile = () => {
  const navigate = useNavigate();
  const [candidateProfile, setCandidateProfile] = useState(null);


  const getProfileData = async (candidate_id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/result/administration/${candidate_id}`, {
        method: "GET",
      });
      const data = await response.json();
      setCandidateProfile(data.data)
    } catch (err) {
      console.error(err.message);
    }
  }


  useEffect(() => {
    const is_login = JSON.parse(localStorage.getItem('user_login'));

    if (is_login === null) {
      navigate('/login')
    }

    getProfileData(is_login.id)
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <img
              className="w-20 h-20 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-gray-800">{candidateProfile !== null? candidateProfile.full_name: ''}</h2>
              <p className="text-gray-600">{candidateProfile !== null? candidateProfile.last_education_name: ''}</p>
              <p className="text-gray-600">Candidate</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-8'>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Latest Job Application Scores</h3>
            <div className='flex flex-col gap-4'>
              <h3 className="text-xl font-semibold text-gray-800">Administration</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">CV Score</h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.cv_score: ''}</span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.cv_description: ''}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">Transcript Score </h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.transcript_score: ''}</span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.transcript_description: ''}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">Motivational Letter Score</h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.motivational_letter_score: ''} </span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.motivational_letter_description: ''}</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className="text-xl font-semibold text-gray-800">HR Interview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">CV Score</h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.cv_score: ''}</span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.cv_description: ''}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">Transcript Score </h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.transcript_score: ''}</span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.transcript_description: ''}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">Motivational Letter Score</h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.motivational_letter_score: ''} </span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.motivational_letter_description: ''}</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className="text-xl font-semibold text-gray-800">Technical Interview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">CV Score</h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.cv_score: ''}</span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.cv_description: ''}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">Transcript Score </h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.transcript_score: ''}</span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.transcript_description: ''}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                  <h4 className="text-gray-800 font-semibold">Motivational Letter Score</h4>
                  <p className="text-gray-600"><span className='font-semibold'>{candidateProfile? candidateProfile.motivational_letter_score: ''} </span> out of 5</p>
                  <p className="text-gray-500 text-sm mt-2">{candidateProfile? candidateProfile.motivational_letter_description: ''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;