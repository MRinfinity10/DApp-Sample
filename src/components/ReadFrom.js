import React from 'react'

export default function ReadFrom({handleSubmit, contractInfo, setContractInfo}) {
  return (
    <div>
        <div>
            <div className=" w-full rounded-xl sm:w-auto shadow-lg mx-auto p-4 border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-gray-800 border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h3 className="text-xl font-medium text-gray-900 text-gray-500">Read from smart contract</h3>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-gray-500">Contract Address (ERC20) </label>
                        <input type="text" name="addr" className="bg-gray-800 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 " placeholder="ERC20 contract address"/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get token info</button>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 rounded-lg">
                                        <thead className="bg-gray-800 dark:bg-gray-700">
                                        <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                                            Name
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                                            Symbol
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-400">
                                            Total Supply
                                        </th>
                                        </tr>
                                        </thead>
                                        <tbody className=" divide-y divide-gray-800 dark:bg-gray-800 dark:divide-gray-800">
                                            <tr className="hover:bg-gray-100 hover:bg-gray-800 hover:rounded-lg rounded-lg">
                                                <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">{contractInfo.tokenName}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">{contractInfo.tokenSymbol}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-400 whitespace-nowrap dark:text-white">{String(contractInfo.totalSupply)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}