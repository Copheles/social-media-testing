const Skeletons = () => {
  return (
    <div className="p-5 w-full border-b border-[#ECF1F4]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            {/* Text-button */}
            <div className="flex flex-col gap-2 w-full">
              {/* Top-box */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-1">
                  <div className="h-4 w-[100px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[30px] bg-gray-200 rounded-lg mb-2"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-4 w-[335px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[109px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[184px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[215px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[229px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[103px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[56px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[103x] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[120px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[80px] bg-gray-200 rounded-lg mb-2"></div>
                </div>
                <div className="flex justify-between w-[247px] mt-3">
                  <div className="h-4 w-[56px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[56px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[56px] bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-[56px] bg-gray-200 rounded-lg mb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeletons;
