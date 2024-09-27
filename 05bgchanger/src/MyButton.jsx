function MyButton({colorName, onTap}) {
    return (
        <button
          onClick={() => onTap(colorName)}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: colorName}}
          >
            {colorName}
        </button>
    );
}

export default MyButton;