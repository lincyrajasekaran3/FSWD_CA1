const TestimonialCard =({name, review})=>{
    return(
        <div className="p-4 max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl text-gray-800 font-bold">{name}</h2>
            <p className="text-gray-600">{review}</p>
        </div>
    );
};

export default TestimonialCard;