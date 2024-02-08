export default function Loading_user() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-[700px] bg-300  m-5 p-2">
        <div className="animate-pulse">
          <div className="flex flex-row ">
            <div className="w-28 bg-gray-200 h-24 rounded-full"></div>
            <div className="basis-full space-y-3 mt-5">
              <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                <div className="basis-1/2 bg-gray-200 h-6 "></div>
              </div>
              <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                <div className="basis-32 bg-gray-200 h-3 "></div>
              </div>
              <div className="basis-full mt-2 flex flex-row justify-end space-x-5  *:rounded-xl">
                <div className="basis-40 bg-gray-200 h-2 "></div>
                <div className="basis-40 bg-gray-300 h-2 "></div>
                <div className="basis-40 bg-gray-200 h-2 "></div>
              </div>
              <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                <div className="basis-40 bg-gray-200 h-2 "></div>
                <div className="basis-52 bg-gray-300 h-2 "></div>
              </div>
              <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                <div className="basis-60 bg-gray-200 h-2 "></div>
                <div className="basis-64 bg-gray-300 h-2 "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full mt-8">
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
            <div className="h-10 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full mt-8">
            <div className="h-48  bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full mt-2">
            <div className="h-10  bg-gray-200 rounded-lg dark:bg-gray-700 w-32"></div>
          </div>
          <div className="flex justify-end w-full mt-5">
            <div className="h-[2px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex justify-end w-full mt-5">
            <div className="h-6 mr-2  bg-gray-200 rounded-lg dark:bg-gray-700 w-60"></div>
          </div>
          <div className="flex items-center w-full mt-5">
            <div className="h-52  bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full mt-5">
            <div className="h-52  bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full mt-5">
            <div className="h-52  bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
