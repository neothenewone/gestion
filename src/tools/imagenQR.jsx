import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser';
import QRCode from 'qrcode.react';
import {View,Svg, Path } from '@react-pdf/renderer';

const imagenQR = (props) => {
    const qrCodeComponent = (
        <QRCode
            value={props.direccion}
            renderAs="svg"
            size={250}
        />
    );
    const qrCodeComponentStaticMarkup = renderToStaticMarkup(qrCodeComponent);
    const parsedQrCodeSvg = parseQrCodeMarkup(qrCodeComponentStaticMarkup);
    if (! parsedQrCodeSvg) {
        return null;
    }
    return (
            <View>
              <Svg
                  style={{ width: props.tamaño, height: props.tamaño }}
                  viewBox="0 0 29 29"
              >
            {parsedQrCodeSvg.props.children.filter(c => c.type === 'path').map((child, index) => (
             <Path
              key={index}
              d={child.props.d}
              fill={child.props.fill}
              />
              ))}
              </Svg>
            </View>
            );
}

const parseQrCodeMarkup = (markup) => {
    let parsedQrCodeSvg = null;

    ReactHtmlParser(markup).forEach(el => {
        const { type } = el;
        if (type === 'svg') {
            parsedQrCodeSvg = el;
        }
    });

    return parsedQrCodeSvg;
};

export default imagenQR;