const Bomark = ({bookmark}) => {
    // console.log(bookmark);
    const {title} = bookmark;
    return (
        <div className="mt-5 bg-slate-200 rounded-md p-3">
            <h1 className="text-xl">{title}</h1>
        </div>
    );
};

export default Bomark;