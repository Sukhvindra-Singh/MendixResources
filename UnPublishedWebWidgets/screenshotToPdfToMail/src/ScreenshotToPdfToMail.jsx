import { createElement } from "react";
import "./ui/ScreenshotToPdfToMail.css";
import React from 'react';
// import html2pdf from 'html2pdf.js';
import { jsPDF } from "jspdf";
import { toCanvas } from "html-to-image";
import { getToday } from "./Utils";
const PAGE_MARGIN = 10;
const BACKGROUND_COLOR = "#fff";


function ScreenshotToPdfToMail(props) {
    // const handleGeneratePDF = async () => {
    //     const bodyElement = document.getElementsByClassName(props.classname)[0];

    //     if (bodyElement) {
    //         const pdfOptions = {
    //             margin: 1,
    //             filename: 'document.pdf',
    //             image: { type: 'jpeg', quality: 1 },
    //             html2canvas: { scale: 1 },
    //             jsPDF: { unit: 'pt', format: 'a4', orientation: props.orientation },
    //         };
    //         if (props.isDownload) {
    //             html2pdf().from(bodyElement).set(pdfOptions).outputPdf().save();
    //         }

    //         const pdfOptions2 = {
    //             margin: 10,
    //             filename: 'document.pdf',
    //             image: { type: 'jpeg', quality: 0.98 },
    //             html2canvas: { scale: 1 },
    //             jsPDF: { unit: 'mm', format: 'a4', orientation: props.orientation },
    //         };
    //         const pdfBlob = await html2pdf().from(bodyElement).set(pdfOptions2).output('blob');

    //         // Convert Blob to base64
    //         const reader = new FileReader();
    //         reader.readAsDataURL(pdfBlob);
    //         reader.onloadend = () => {
    //             const base64PDF = reader.result.split(',')[1];

    //             // delay to allow the base64 to be set
    //             setTimeout(() => {
    //                 console.log("base", base64PDF)
    //                 props.base64Image.setTextValue(base64PDF)
    //                 props.base64Image.setValue(base64PDF)

    //                 if (props.onSuccess.canExecute) {
    //                     props.onSuccess.execute()
    //                 }
    //             }, 1000);



    //             // const to = '.com';
    //             // const subject = 'Subject of the email';
    //             // const body = 'Body of the email';


    //             // const mailtoURL = `mailto:${to}?subject=${encodeURIComponent(
    //             //     subject
    //             // )}&body=${encodeURIComponent(body)}&attachment=${encodeURIComponent(base64PDF)}`;

    //             // window.location.href = mailtoURL;
    //         }
    //     }
    // };
    const onClick = async () => {
        const newDoc = new jsPDF({
            orientation: props.pageOrientation,
            unit: "px",
            format: props.pageSize,
            hotfixes: ["px_scaling"]
        });
        // Get Accurate PX size of A4 page
        const { getWidth, getHeight } = newDoc.internal.pageSize;
        const pageWidth = getWidth();
        const pageHeight = getHeight();

        const foundPrintableClassName = document.getElementsByClassName(props.classNameToFound)[0];

        if (!foundPrintableClassName) {
            throw new Error(`⚠️ No Printable Class name found - Cant find class ${props.classNameToFound}`);
        }

        /**
         * 🤔 Method for this inspired/stolen/found from https://stackoverflow.com/questions/19272933/jspdf-multi-page-pdf-with-html-renderer/34934497#34934497
         */

        // HTML to CANVAS
        const htmlCanvas = await toCanvas(foundPrintableClassName, { backgroundColor: BACKGROUND_COLOR });

        // Helper to get Ratio Correct
        const pageHeightRatio = (htmlCanvas.width * (pageHeight - PAGE_MARGIN * 2)) / (pageWidth - PAGE_MARGIN * 2);

        const amountOfPagesNeeded = Math.ceil(htmlCanvas.height / pageHeightRatio);

        // Canvas Height
        let canvasHeight = htmlCanvas.height;
        // Pages Count
        let pagesAdded = 1; // jsPDF stars on 1 page

        while (canvasHeight >= 0) {
            const pageDifference = htmlCanvas.height - canvasHeight;
            /**
             * Create new Canvas to fill out A4 page
             */
            const pageCanvas = document.createElement("canvas");

            //Set Empty Canvas Height and Widget to the of A4 Page
            pageCanvas.width = pageWidth;
            pageCanvas.height = pageHeight;

            // Get context of Canvas
            const ctx = await pageCanvas.getContext("2d");

            if (!ctx) {
                throw new Error("⚠️ No Context for Canvas Found");
            }
            // Set Background to White (TODO for PNG ect. we would want to expand this)
            ctx.fillStyle = BACKGROUND_COLOR;
            // Draw a White square the size of an A4 Page
            await ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
            // Draw image on our created Canvas
            await ctx.drawImage(
                htmlCanvas,
                0, // sx No Clipping
                pageDifference, // sy No Clipping
                htmlCanvas.width, // sWidth Width of IMG
                pageHeightRatio, // sHeight Width of IMG
                PAGE_MARGIN, // x - coordinate to place IMG -> Results in 20px margin L&R
                PAGE_MARGIN, // y - coordinate to place IMG -> Results in 20px margin T&B
                pageCanvas.width - PAGE_MARGIN * 2,
                pageCanvas.height - PAGE_MARGIN * 2
            );
            // Covert Canvas to JPEG
            let pageImgData = await pageCanvas.toDataURL("image/jpeg", 1.0);

            // Add Image to PDF
            newDoc.addImage(pageImgData, "JPEG", 0, 0, 0, 0);
            //Update Canvas left to print
            canvasHeight = canvasHeight - pageHeightRatio;
            if (pagesAdded < amountOfPagesNeeded) {
                pagesAdded = pagesAdded + 1;
                newDoc.addPage();
            }
            const base64PDF = newDoc.output('dataurl').split(',')[1];
            props.base64Image.setTextValue(base64PDF);
            props.base64Image.setValue(base64PDF);
        }

        // And Finally Save PDF
        if (props.isDownload) {
            newDoc.save(`${props.prefixPageName}_${getToday()}.pdf`);
        }

        if(props.onSuccess && props.onSuccess.canExecute){
            props.onSuccess.execute()
        }

    };
    return (
        <div onClick={onClick} style={props.style} className={props.class}>{props.printButton}</div>
    );
}



export default ScreenshotToPdfToMail

