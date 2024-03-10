import React from 'react'
import { Link } from '@nextui-org/link'
function MasterBany() {
  return (
    <div>
         <div className="bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <div className="bg-blue-100 rounded-md p-4 mb-2">
                <h3 className="font-sans text-2xl">প্রধান শিক্ষকের বাণী</h3>
                <p className="text-gray-700 text-inherit">
                  বিসমিল্লাহির রাহমানির রাহিম সকল প্রশংসা জ্ঞাপন করছি মহান
                  আল্লাহ তা‘আলার দরবারে যিনি আমাদেরকে ঐশী শিক্ষা সম্প্রসারনে
                  আধুনিক প্রযুক্তির মহাসড়কে সম্পৃক্ত হওয়ার তৌফিক দিয়েছেন। দুরুদ
                  ও সালাম পেশ করছি মানবতার শ্রেষ্ঠ শিক্ষক বিশ্বনবী হযরত মুহাম্মদ
                  (সা) এর উপরে।
                </p>
                <p>হাফেজ মাওলানা মোঃ আব্দুল বারিক</p>

                <div className="mt-4">
                  <Link
                    href="/"
                    isExternal
                    showAnchorIcon
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    বিস্তারিত
                  </Link>
                </div>
              </div>
              <div className="bg-green-100 rounded-md p-4">
                <h3 className="font-sans text-2xl">সহকারী প্রধান শিক্ষক</h3>
                <p className="text-gray-700">
                  বিসমিল্লাহির রাহমানির রাহিম সকল প্রশংসা জ্ঞাপন করছি মহান
                  আল্লাহ তা‘আলার দরবারে যিনি আমাদেরকে ঐশী শিক্ষা সম্প্রসারনে
                  আধুনিক প্রযুক্তির মহাসড়কে সম্পৃক্ত হওয়ার তৌফিক দিয়েছেন। দুরুদ
                  ও সালাম পেশ করছি মানবতার শ্রেষ্ঠ শিক্ষক বিশ্বনবী হযরত মুহাম্মদ
                  (সা) এর উপরে।
                </p>
                <div className="mt-4">
                  <p></p>
                  <Link
                    href="/"
                    isExternal
                    showAnchorIcon
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    বিস্তারিত
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MasterBany