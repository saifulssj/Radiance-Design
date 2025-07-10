import React from "react";

const About = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5 mt-16">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className="text-blue-700 tracking-light text-[32px] font-bold leading-tight min-w-72">About Radiance Design</h1>
            </div>

            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Radiance Design was founded in 2021 by Rasel, a visionary graphic designer with a passion for creating impactful visual solutions. Starting as a small studio,
              we've grown into a leading design agency, known for our creativity, professionalism, and client-focused approach. Our team of talented designers, project managers,
              and strategists work collaboratively to deliver exceptional results that exceed expectations.
            </p>
            <h2 className="text-blue-700 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Team</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full bg-[url('/assets/team/rasel.png')]"
                   
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Rasel </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">Founder &amp; Creative Director</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full bg-[url('/assets/team/habib_reza.png')]"
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Habib reza</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">Lead Designer</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full bg-[url('/assets/team/sheila.png')]"
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">sheila khan  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">Project Manager</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-center pb-3">
                <div className="px-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full bg-[url('/assets/team/fardin.png')]"
                  ></div>
                </div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">fardin hasan</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">Design Strategist</p>
                </div>
              </div>
            </div>
            <h2 className="text-blue-700 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Design Philosophy</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Radiance Design, we believe that great design is more than just aesthetics; it's about creating meaningful connections between brands and their audiences. Our
              philosophy is rooted in understanding our clients' unique needs and goals, and translating them into visually compelling and effective designs. We combine creativity
              with strategic thinking to deliver solutions that not only look beautiful but also drive results.
            </p>
            <h2 className="text-blue-700 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Client Testimonials</h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
              {/* Testimonial 1 */}
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbrZjzCvengXwNpXhAO8qM--YgPoP2ztFMFpuuvhxDjW-iatx4r6RPjTSk_s6ExOBNuNK_0ogoRBfJvirUPCFOfTCw42_JzwV1qVFUQGXaHMnOiEnUfVk-mIxqclD0bRr5ASIAbcrnjPgGTfY9Hb-auOEeN-ltrS6yp1IyeM5Me4EJKGvwHUDVANlJQMuGfvp0Xvx-Bc2sUxbtO0shPDcNrPDWhHq2y90KPlVGHWTE_zZ7QxDBX7REZb4guFp3exC262m7Eyo61ck")',
                    }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#111418] text-base font-medium leading-normal">Sophia Reynolds</p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">2023-08-15</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill" key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#111418] text-base font-normal leading-normal">
                  Radiance Design transformed our brand identity with their exceptional creativity and attention to detail. Their team was professional, responsive, and truly
                  understood our vision. We couldn't be happier with the results!
                </p>
              </div>
              {/* Testimonial 2 */}
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_U75C0r2IIDzX6y2z1Aq-S6H4WMXIXxL_ut9YWOpwHEyAQ6CfEHJ4Wsj7WiYp-XB1L_mZRxHOmqia_5KAFcXMJqrYywHGqeX3OjwmIGBj3BCghT7pC9L8BfGji9HJuPrdRZZobexwwO1xwjl8wOh4_eiWDNeFkAUwN3lCC3c64ZPNESx5JdDpEaNuYXQRymY20hh5-RhznOYNsWTWE05I3-p7N7v_k3fV2vRZZu_1W0SJCxyikIAuRJGXBfHJStuj9zYPYMdMamw")',
                    }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#111418] text-base font-medium leading-normal">Liam Walker</p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">2023-09-22</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill" key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#111418] text-base font-normal leading-normal">
                  Working with Radiance Design was a fantastic experience. They delivered a stunning website that perfectly captures our brand's essence. Their project management
                  was top-notch, ensuring everything was completed on time and within budget.
                </p>
              </div>
              {/* Testimonial 3 */}
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnYLm0eBSH5gsNMqRHYmR7aiMCS7NRqd4Lk9nexZIPHGLMCNcqwRqTEz8qah2Jfa5heNqdE1LWCwBbwmadJ8Ynlj2SZZKQ5Y91DsrHSWDcnRud2XdC1bGTWDREuCaJhPmen9BWnuV504AqZij69ZBcRICB9dEp2jlIqOGZKA1qRVX_YBMBQ1rHuqxCtuDlrY-D4YPMKthhBwNTargC-3sJlHj4lQeDbtMzDTxEWJzJJ4EiwDCCUeBj_rp9MXnXzPQUhQxZaXVBcdM")',
                    }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#111418] text-base font-medium leading-normal">Isabella Hayes</p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">2023-10-10</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill" key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#111418] text-base font-normal leading-normal">
                  Radiance Design exceeded our expectations with their innovative design solutions and strategic approach. Their team's expertise and dedication made the entire
                  process seamless and enjoyable. We highly recommend their services!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;