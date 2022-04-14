import React from 'react'

export default function WriteForm({handleTransfer}) {
  return (
    <div>
        <div className=" w-full rounded-xl mt-4 sm:w-auto shadow-lg mx-auto p-4 border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6" onSubmit={handleTransfer}>
                <h3 className="text-xl font-medium text-gray-500 dark:text-white">Write to contract</h3>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Recipient address</label>
                    <input type="text" name="recipient" className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Recipient address"/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Amount to transfer</label>
                    <input type="text" name="amount" className="bg-gray-800 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Amount to transfer"/>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Transfer</button>
            </form>
        </div>
    </div>
  )
}