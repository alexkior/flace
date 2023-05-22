import * as React from "react";
import style from "./StartBackground.module.css";

export const StartBackground: React.FC = function () {
  const [svgParams, setSvgParams] = React.useState(400);
  return (
    <section className={style.startBackground_wrapper}>
      <div className={style.startBackground}>
        <svg
          width={svgParams}
          height={svgParams}
          viewBox="0 0 637 637"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_51_10)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M318.5 597C472.311 597 597 472.311 597 318.5C597 164.689 472.311 40 318.5 40C164.689 40 40 164.689 40 318.5C40 472.311 164.689 597 318.5 597ZM318.5 499.149C418.27 499.149 499.149 418.27 499.149 318.5C499.149 218.731 418.27 137.851 318.5 137.851C218.731 137.851 137.851 218.731 137.851 318.5C137.851 418.27 218.731 499.149 318.5 499.149Z"
              fill="#FBF3EB"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_51_10"
              x="0"
              y="0"
              width="637"
              height="637"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-10" dy="-10" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_10"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="10" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.879883 0 0 0 0 0.759766 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_10"
                result="effect2_dropShadow_51_10"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_51_10"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <svg
          width={svgParams}
          height={svgParams}
          viewBox="0 0 569 569"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_121_41)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M513.889 55.9629C493.861 35.9347 461.388 35.9346 441.36 55.9629L284.926 212.397L128.492 55.9629C108.463 35.9346 75.9911 35.9346 55.9629 55.9629C35.9346 75.9911 35.9346 108.463 55.9628 128.491L212.397 284.926L55.9628 441.36C35.9346 461.388 35.9346 493.861 55.9628 513.889C75.9911 533.917 108.463 533.917 128.491 513.889L284.926 357.454L441.36 513.889C461.388 533.917 493.861 533.917 513.889 513.889C533.917 493.861 533.917 461.388 513.889 441.36L357.454 284.926L513.889 128.492C533.917 108.463 533.917 75.9911 513.889 55.9629Z"
              fill="#FBF3EB"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_121_41"
              x="0.94165"
              y="0.941681"
              width="567.968"
              height="567.968"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-10" dy="-10" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_121_41"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="10" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.879883 0 0 0 0 0.759766 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_121_41"
                result="effect2_dropShadow_121_41"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_121_41"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};
