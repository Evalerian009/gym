

const Contact = () => {
  return (
    <div className="py-10 px-5 md:p-14 bg-black text-[ghostwhite]">
      <div className="lg:w-[75%] mx-auto">
        <h3 className="text-3xl md:text-4xl uppercase font-semibold">Make a reservation</h3>
        <p className="mt-3">Our clients are important to us, so we continually train our therapists to ensure that all treatments are of the highest standard and that each client recieves the best care.</p>
      </div>
      <form className="lg:w-[75%] mx-auto flex flex-wrap justify-between gap-y-7 mt-7 text-slate-400 text-lg">
          <label className="w-full md:w-[48%] block">Email
            <input type="text" placeholder="Enter a valid email address" className="bg-gray-900 w-full" />
          </label>
          <label className="w-full md:w-[48%] block">Name
            <input type="text" placeholder="Enter your name" className="bg-gray-900 w-full" />
          </label>
          <label className="w-full md:w-[48%] block">Date
            <input type="date" className="bg-gray-900 w-full" />
          </label>
          <label className="w-full md:w-[48%] block">Phone
            <input type="text" placeholder="Enter your phone (e.g. +14155552675)" className="bg-gray-900 w-full" />
          </label>
          <label className="w-[100%] block">Message
            <textarea type="text" placeholder="Enter your message" className="bg-gray-900 w-full resize-none" rows={5} />
          </label>
          <button className="border border-[ghostwhite] py-2 px-5 font-semibold hover:bg-[ghostwhite] hover:text-black">Submit</button>
      </form>
    </div>
  )
}

export default Contact