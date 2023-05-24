import React from 'react'

type Props = {}

const Ticket = (props: Props) => {
  return (
    // <div className="section">
    // <div className="container pt-5">
    //     <div className="row justify-content-center">
    //         <div className="col-12 text-center">
    //             <h1 className="pb-4">Choose <i className='uil uil-bus color-yellow'></i> ticket</h1>
    //             <div className="section">
    <>
                    <input className="checkbox-ticket ticket-checkbox" type="radio" name="ticket" id="ticket-1" />
                    <label htmlFor="ticket-1">
                        <span className="top-dots">
                            <span className="section dots">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </span>
                        <span className="duration">
                            30 min
                        </span>
                        <span className="price mt-2 pb-4 mb-3">
                            <sup>$</sup>2.95
                        </span>
                        <span className="section dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span className="section pt-4">
                            <i className='uil uil-clock-two mt-3'></i>
                        </span>
                        <span className="time mt-2">
                            2:00 pm - 2:30 pm
                        </span>
                        <span className="bottom-dots">
                            <span className="section dots">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </span>
                    </label>
                    </>
                    // <input className="checkbox-ticket" type="radio" name="ticket" id="ticket-2" />
                    // <label htmlFor="ticket-2">
                    //     <span className="top-dots">
                    //         <span className="section dots">
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //         </span>
                    //     </span>
                    //     <span className="duration">
                    //         60 min
                    //     </span>
                    //     <span className="price mt-2 pb-4 mb-3">
                    //         <sup>$</sup>4.95
                    //     </span>
                    //     <span className="section dots">
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //     </span>
                    //     <span className="section pt-4">
                    //         <i className='uil uil-clock-two mt-3'></i>
                    //     </span>
                    //     <span className="time mt-2">
                    //         2:00 pm - 3:00 pm
                    //     </span>
                    //     <span className="bottom-dots">
                    //         <span className="section dots">
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //         </span>
                    //     </span>
                    // </label>
                    // <input className="checkbox-ticket" type="radio" name="ticket" id="ticket-3" />
                    // <label htmlFor="ticket-3">
                    //     <span className="top-dots">
                    //         <span className="section dots">
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //         </span>
                    //     </span>
                    //     <span className="duration">
                    //         90 min
                    //     </span>
                    //     <span className="price mt-2 pb-4 mb-3">
                    //         <sup>$</sup>6.95
                    //     </span>
                    //     <span className="section dots">
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //         <span></span>
                    //     </span>
                    //     <span className="section pt-4">
                    //         <i className='uil uil-clock-two mt-3'></i>
                    //     </span>
                    //     <span className="time mt-2">
                    //         2:00 pm - 3:30 pm
                    //     </span>
                    //     <span className="bottom-dots">
                    //         <span className="section dots">
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //             <span></span>
                    //         </span>
                    //     </span>
                    // </label>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
  )
}

export default Ticket;
