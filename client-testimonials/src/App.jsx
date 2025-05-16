import TestimonialCard from "./components/TestimonialCard";

function App(){
  const testimonialDetails =[
    {name:'Emily Watson', review:'This service was amazing! Highly recommended.'},
    {name:'Lincy', review:'Extraordinary Service, Do give it a try guys!'}
  ];

  return(
    <div className="min-h-screen bg-blue-300 p-6 flex flex-col items-center space-y-4 ">
      <h1 className="text-3xl font-extrabold text-pink-600 mb-6">Customer reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {testimonialDetails.map((testimonial, index)=>(
          <TestimonialCard key={index} name={testimonial.name} review={testimonial.review}/>
        ))}
      </div>
    </div>
  );
}

export default App;