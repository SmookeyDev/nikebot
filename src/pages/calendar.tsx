import moment from "moment";
import "../static/css/fonts.css";

const Card = ({ productId, name, image, release_date }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="container">
        <div className="max-w-md w-full bg-gray-800 shadow-lg rounded-xl p-6">
          <div className="flex flex-col">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <div className="absolute flex flex-col left-0 right-0 p-3 snkr-release__date text-black uppercase">
                    <div>{ moment(release_date).format('MMM')}</div>
                    <div>{ moment(release_date).format('DD')}</div>
                </div>
                <img
                  src={image}
                  className="w-full object-fill rounded-2xl"
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap">
                  <div className="flex items-center w-full justify-between min-w-0 py-2">
                    <h2 className="text-3xl mr-auto cursor-pointer text-gray-200 truncate">
                    { name }
                    </h2>
                  </div>
                </div>
                <div className="flex space-x-2 text-sm font-medium justify-start">
                  <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800">
                    <span>Agendar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Calendar() {
  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0">
      <Card
        productId="195244308736"
        name="Air Max 90"
        image="https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-qs-laser-DH4689-200-1-11627399960.jpg"
        release_date="2021-08-01T13:00:00.000Z"
      />
    </div>
  );
}

export default Calendar;
