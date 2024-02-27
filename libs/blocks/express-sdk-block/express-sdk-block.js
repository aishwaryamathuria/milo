import { loadScript } from '../../utils/utils.js';
let ccEverywhere;

async function fetchAndConvertToBase64(url, callback) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Failed to fetch image');
      }
      const blob = await response.blob();
      
      const base64String = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
              resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
      });

      callback(base64String);
  } catch (error) {
      console.error('Error:', error);
  }
}


export default function init(el) {
document.querySelector('.express-sdk-block').innerHTML += '<div id="cceverywherediv"></div>'
const imageUrl = 'https://clio-assets.adobe.com/clio-playground/image-inspirations/v9/thumbnails1/3d_render_baby_parrot_adorable_362.jpg';
fetchAndConvertToBase64(imageUrl, base64String => {
    // console.log('Base64 string:', base64String);
    loadScript('https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js').then(async () => {
    if (!window.CCEverywhere) {
      return;
    }
    if (!ccEverywhere) {
      let env = 'preprod';
      ccEverywhere = await window.CCEverywhere.initialize({
        clientId: 'b20f1d10b99b4ad892a856478f87cec3',
        appName: 'express',
      }, {
        loginMode: 'delayed',
        env,
      });
    }

    const exportOptions = [
      {
        target: 'Download',
        id: 'download-button',
        optionType: 'button',
        buttonType: 'native',
      },
      {
        target: 'Editor',
        id: 'edit-in-express',
        buttonType: 'native',
        optionType: 'button',
      },
    ];
      ccEverywhere.openQuickAction({
        id: 'crop-image',
        inputParams: {
          asset: {
            data: base64String,
            dataType: 'base64',
            type: 'image',
          },
          exportOptions,
        },
        modalParams: {
          parentElementId: 'cceverywherediv',
          size: {
              width: 500,
              height: 500,
              unit: 'px',
          },
        },
      });
    });
  });
}
