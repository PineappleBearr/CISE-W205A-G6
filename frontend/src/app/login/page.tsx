"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">
                    Login
                </h1>
                <Navbar />
                <div className="container d-flex flex-column align-items-center mt-10 border-3 p-10 w-75">
                    <h2 className="m-2 p-2">
                        Login / Create Account
                    </h2>
                    <form className="mt-2">  {/* Ensure form width */}
                        {/* Email Section */}
                        <div className="row mb-3 align-items-center">
                            <label className="col-sm-3 col-form-label">Email:</label>
                            <div className="col-sm-9">
                                <input
                                    className="form-control"
                                    placeholder="Enter email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="row mb-3 align-items-center">
                            <label className="col-sm-3 col-form-label">Password:</label>
                            <div className="col-sm-9">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit" disabled={true}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
