export default function Applicant() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-5 pt-10 lg:gap-14">
            <div>
                <h1 className="font-semibold lg:text-2xl">View Applicants</h1>
            </div>
            <div className="w-1/2 lg:w-1/4">
                <img src="/images/apply.svg" alt="Avatar" />
            </div>
        </div>
    )
}