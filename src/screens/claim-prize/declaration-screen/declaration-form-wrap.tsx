import DeclarationForm from "./form";


export const DeclarationFormScreen = () => {
 

  return (
    <div className="bg-black h-full flex flex-col items-center justify-center py-14">
      <div className="max-w-4xl flex flex-col items-center justify-center">
        <h3 className="text-gray-200 text-xl md:text-3xl text-center max-w-full md:max-w-[70%] mb-3">
          Claim Your Prize by Completing your Declaration form & Upload your ID
          below
        </h3>
          <DeclarationForm />
      </div>
    </div>
  );
}
