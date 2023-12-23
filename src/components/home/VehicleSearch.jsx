import carAbstract from '/images/car-abstract.png';

const VehicleSearch = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 gap-0">
        <div className="relative col-span-2 px-4">
          <div
            className="absolute top-0 bottom-0 -right-0.5 h-full w-full bg-primary"
            style={{
              clipPath: `polygon(80% 0, 100% 0%, 100% 100%, 80% 100%, 97% 50%)`,
            }}
          />
          <img src={carAbstract} alt="" />
        </div>
        <div className="bg-primary col-span-10 h-full flex items-center px-4 md:px-10">
          <div className="flex justify-start items-center">
            <form className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="make"
                  className="text-white font-semibold font-secondary"
                >
                  Select Make:
                </label>
                <select
                  name="make"
                  id="make"
                  className="bg-white border-0 w-full"
                >
                  <option className="uppercase" value="nissan">
                    nissan
                  </option>
                  <option className="uppercase" value="dodge">
                    dodge
                  </option>
                  <option className="uppercase" value="subaru">
                    subaru
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSearch;
