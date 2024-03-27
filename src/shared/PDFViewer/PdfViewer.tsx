import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { ButtonsInfo } from "@/src/app/configs/socialnoe-obsluzhivanie-page-config";

interface PdfViewerProps {
  buttonsInfo: ButtonsInfo
  index: number
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  buttonsInfo,
  index,
}) => {
  const toolbarPluginInstance = toolbarPlugin();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <div>
      <div className="mb-[10px] xl:mb-[20px] h-[333px] xl:h-[911px]">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
        >
          <Viewer
            fileUrl={buttonsInfo[index].path}
            plugins={[
              toolbarPluginInstance,
              defaultLayoutPluginInstance,
              getFilePluginInstance,
            ]}
          />
        </Worker>
      </div>

      <Download>
        {(props: RenderDownloadProps) => (
          <button
            onClick={props.onClick}
            className="text-turquoise-light underline font-semibold xl:font-medium text-[14px] xl:text-[18px] leading-[21px] xl:leading-[27px] text-left hover:opacity-80"
          >
            {`Скачать "${buttonsInfo[index].title}"`}
          </button>
        )}
      </Download>
    </div>
  );
};

export default PdfViewer;
