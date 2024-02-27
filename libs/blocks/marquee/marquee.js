/*
 * Marquee - v6.0
 */

var ccEverywhere;
import { decorateButtons, getBlockSize, decorateBlockBg } from '../../utils/decorate.js';
import { createTag, getConfig, loadStyle } from '../../utils/utils.js';
import { loadScript } from '../../utils/utils.js';

// [headingSize, bodySize, detailSize]
const blockTypeSizes = {
  marquee: {
    small: ['xl', 'm', 'm'],
    medium: ['xl', 'm', 'm'],
    large: ['xxl', 'xl', 'l'],
    xlarge: ['xxl', 'xl', 'l'],
  },
};

function decorateText(el, size) {
  const headings = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const heading = headings[headings.length - 1];
  const config = blockTypeSizes.marquee[size];
  const decorate = (headingEl, typeSize) => {
    headingEl.classList.add(`heading-${typeSize[0]}`);
    headingEl.nextElementSibling?.classList.add(`body-${typeSize[1]}`);
    const sib = headingEl.previousElementSibling;
    if (sib) {
      const className = sib.querySelector('img, .icon') ? 'icon-area' : `detail-${typeSize[2]}`;
      sib.classList.add(className);
      sib.previousElementSibling?.classList.add('icon-area');
    }
  };
  decorate(heading, config);
}

function decorateMultipleIconArea(iconArea) {
  iconArea.querySelectorAll(':scope > picture').forEach((picture) => {
    const src = picture.querySelector('img')?.getAttribute('src');
    const a = picture.nextElementSibling;
    if (src?.endsWith('.svg') || a?.tagName !== 'A') return;
    if (!a.querySelector('img')) {
      a.innerHTML = '';
      a.className = '';
      a.appendChild(picture);
    }
  });
  if (iconArea.childElementCount > 1) iconArea.classList.add('icon-area-multiple');
}

function extendButtonsClass(text) {
  const buttons = text.querySelectorAll('.con-button');
  if (buttons.length === 0) return;
  buttons.forEach((button) => { button.classList.add('button-justified-mobile'); });
}

const decorateImage = (media) => {
  media.classList.add('image');

  const imageLink = media.querySelector('a');
  const picture = media.querySelector('picture');

  if (imageLink && picture && !imageLink.parentElement.classList.contains('modal-img-link')) {
    imageLink.textContent = '';
    imageLink.append(picture);
  }
};

export async function loadMnemonicList(foreground) {
  try {
    const { base } = getConfig();
    const stylePromise = new Promise((resolve) => {
      loadStyle(`${base}/blocks/mnemonic-list/mnemonic-list.css`, resolve);
    });
    const loadModule = import('../mnemonic-list/mnemonic-list.js')
      .then(({ decorateMnemonicList }) => decorateMnemonicList(foreground));
    await Promise.all([stylePromise, loadModule]);
  } catch (err) {
    window.lana?.log(`Failed to load mnemonic list module: ${err}`);
  }
}

export default async function init(el) {
  const excDark = ['light', 'quiet'];
  if (!excDark.some((s) => el.classList.contains(s))) el.classList.add('dark');
  const children = el.querySelectorAll(':scope > div');
  const foreground = children[children.length - 1];
  if (children.length > 1) {
    children[0].classList.add('background');
    decorateBlockBg(el, children[0], { useHandleFocalpoint: true });
  }
  foreground.classList.add('foreground', 'container');
  const headline = foreground.querySelector('h1, h2, h3, h4, h5, h6');
  const text = headline.closest('div');
  text.classList.add('text');
  const media = foreground.querySelector(':scope > div:not([class])');

  if (media) {
    media.classList.add('asset');
    if (!media.querySelector('video, a[href*=".mp4"]')) decorateImage(media);
  }

  const firstDivInForeground = foreground.querySelector(':scope > div');
  if (firstDivInForeground?.classList.contains('asset')) el.classList.add('row-reversed');

  const size = getBlockSize(el);
  decorateButtons(text, size === 'large' ? 'button-xl' : 'button-l');
  decorateText(text, size);
  const iconArea = text.querySelector('.icon-area');
  if (iconArea?.childElementCount > 1) decorateMultipleIconArea(iconArea);
  extendButtonsClass(text);
  if (el.classList.contains('split')) {
    if (foreground && media) {
      media.classList.add('bleed');
      foreground.insertAdjacentElement('beforebegin', media);
    }

    let mediaCreditInner;
    const txtContent = media?.lastChild?.textContent?.trim();
    if (txtContent) {
      mediaCreditInner = createTag('p', { class: 'body-s' }, txtContent);
    } else if (media.lastElementChild?.tagName !== 'PICTURE') {
      mediaCreditInner = media.lastElementChild;
    }

    if (mediaCreditInner) {
      const mediaCredit = createTag('div', { class: 'media-credit container' }, mediaCreditInner);
      el.appendChild(mediaCredit);
      el.classList.add('has-credit');
      media?.lastChild.remove();
    }
  }
  if (el.classList.contains('mnemonic-list') && foreground) {
    await loadMnemonicList(foreground);
  }

  el.querySelector('.foreground .asset').innerHTML = '';
  addtoIframe(el);

  const inputSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" stroke="#fff"/>
    <polyline points="16 12 12 8 8 12" stroke="#fff"/>
    <line stroke="#fff" x1="12" y1="16" x2="12" y2="8"/>
  </svg>`;
  el.querySelector('.action-area').innerHTML = `<label id="file-input-label" for="file-input">${inputSvg} Select a File</label><input type='file' class='upload-file' id="file-input" name="file-input" />`;
  el.querySelector('.action-area #file-input-label').className = el.querySelector('.action-area #file-input-label').className + ' con-button blue button-xl button-justified-mobile';
  el.querySelector('.action-area .upload-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) {
        console.error('No file selected');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64String = e.target.result;
      addtoIframe(el, false, base64String);
    };
    reader.readAsDataURL(file);
  });
}


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


export function addtoIframe(el, fetchAndConvert=true, localBase64String='') {
  let qaname = '';
  const regex = 
  [...el.classList].forEach((cn) => { 
    if(cn.match(/\bqa-\w+/)) {
      qaname = cn.replace('qa-', '');
      console.log(cn, qaname);
    }
  });
  // const qaname = 'crop-image';
  el.querySelector('.foreground .asset').id = `cceverywherediv-${qaname}`;
  if (fetchAndConvert) {
    const imageUrl = 'https://clio-assets.adobe.com/clio-playground/image-inspirations/v9/thumbnails1/3d_render_baby_parrot_adorable_362.jpg';
    fetchAndConvertToBase64(imageUrl, base64String => {
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
      ];
        ccEverywhere.openQuickAction({
          id: qaname,
          inputParams: {
            asset: {
              data: base64String,
              dataType: 'base64',
              type: 'image',
            },
            exportOptions,
          },
          modalParams: {
            parentElementId: `cceverywherediv-${qaname}`,
            minSize: {
                width: 500,
                height: 500,
                unit: 'px',
            },
            padding: 0,
            backgroundColor: 'white',
          },
        });
      });
    });
  } else {
    if (window.CCEverywhere) {
      ccEverywhere = null;
      window.CCEverywhere.terminate();
    }
    loadScript('https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js').then(async () => {
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
      ];
        ccEverywhere.openQuickAction({
          id: qaname,
          inputParams: {
            asset: {
              data: localBase64String,
              dataType: 'base64',
              type: 'image',
            },
            exportOptions,
          },
          modalParams: {
            parentElementId: `cceverywherediv-${qaname}`,
            minSize: {
                width: 500,
                height: 500,
                unit: 'px',
            },
            padding: 0,
            backgroundColor: 'white',
          },
        });
      });
  }
}
