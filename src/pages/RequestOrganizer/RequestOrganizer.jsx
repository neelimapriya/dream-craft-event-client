import { useForm } from "react-hook-form";
import Container from "../../components/container/Container";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RequestOrganizer = () => {

    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosSecure = useAxiosPublic()

    const onSubmit = async (data) => {
        if (data) {
            const request = {
                // userId: role._id,
                // name: user.displayName,
                // image: user.photoURL,
                experience: data.experience,
                title: data.company,
                category: data.skills,
                // email: user.email,
                status: "pending"
            }

            toast.success('Request for organizer, await for confirmation')
            const requestRes = await axiosSecure.post('/request-organizer', request)
            console.log(requestRes);
            if (requestRes.data.insertedId) {
                reset()
            }
        }
    }

    return (
        <div className="bg-[#E9F8F3B2] py-16">
            <Container>
                <div className="p-10 bg-white rounded-md">
                    <div className="text-center">
                        <h2 className="text-3xl text-dark_01 font-medium">Request for Organizer</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                value={user?.displayName}
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                value={user?.email}
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Company Name</label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                {...register('company', { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.company && <span className="text-red-500">Company name is required</span>}
                        </div>
                        <div>
                            <label htmlFor="experience" className="block text-gray-700 font-semibold mb-1">Event Organization Experience</label>
                            <textarea
                                {...register('experience', { required: true })}
                                placeholder="Event Organization Experience"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            {errors.experience && <span className="text-red-500">Experience is required</span>}
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Event Organization Skills</label>
                            <textarea
                                {...register('skills', { required: true })}
                                placeholder="Event Organization Skills"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            {errors.skills && <span className="text-red-500">Skills is required</span>}
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="bg-primary px-4 py-2 rounded-md text-white uppercase">Submit Request</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default RequestOrganizer;