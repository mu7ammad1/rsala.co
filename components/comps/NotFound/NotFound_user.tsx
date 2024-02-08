export default function NotFound_user() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-[700px] bg-300  m-5 p-2">
        <div className="rounded-2xl bg-gray-200 dark:bg-gray-700">
          <div className="flex justify-center items-center h-full w-full mt-5">
            <h1 className="h-52  text-[#101010]  w-full text-9xl font-bold flex justify-center items-center">
              404
            </h1>
          </div>

          <div className="flex items-center w-full">
            <h1 className="h-12 text-lg flex justify-center items-center w-full">
              يبدو ان الرابط غير صحيح
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
