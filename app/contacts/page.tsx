import React from 'react'

function Contacts() {
  return (
    <div>
              {/* <!-- start of map section --> */}
        <section
          id="contact"
          className="text-gray-700 body-font relative"
          data-aos="zoom-in-up"
        >
          <div className="container px-5 py-24 mx-auto">
            <div
              className="w-100 h-80 mx-auto mb-10 bg-gray-300 rounded-lg overflow-scroll relative"
            >
              <iframe
                width="100%"
                height="100%"
                className="absolute top-0 w-100 h-80 inset-0"
                title="map"
                scrolling="yes"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Your%20Location&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contacts