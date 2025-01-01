const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-t-2 border-b-2 py-3 mb-8">{heading}</h3>
        </div>
    );
};

export default SectionTitle;