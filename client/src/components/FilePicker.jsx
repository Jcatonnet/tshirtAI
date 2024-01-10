/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container flex flex-col h-full">
      <div className="flex-grow flex flex-col justify-between">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Logo"
            handleClick={() => readFile("logo")}
            customeStyles="text-xs"
          />
          <CustomButton
            type="filled"
            title="Full"
            handleClick={() => readFile("full")}
            customeStyles="text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default FilePicker;
