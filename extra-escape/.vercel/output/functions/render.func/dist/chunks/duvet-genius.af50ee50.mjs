import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.d5d32515.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere commodo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ligula vel metus efficitur hendrerit. In hac habitasse platea dictumst. Praesent et mauris ut mi dapibus semper. Curabitur tortor justo, efficitur sit amet pretium cursus, porta eget odio. Cras ac venenatis dolor. Donec laoreet posuere malesuada. Curabitur nec mi tempor, placerat leo sit amet, tincidunt est. Quisque pellentesque venenatis magna, eget tristique nibh pulvinar in. Vestibulum vitae volutpat arcu. Aenean ut malesuada odio, sit amet pellentesque odio. Suspendisse nunc elit, blandit nec hendrerit non, aliquet at magna. Donec id leo ut nulla sagittis sodales.</p>\n<p>Integer vitae nibh elit. Suspendisse eget urna eu neque bibendum pharetra. Sed interdum lectus sem, in pulvinar magna dignissim vel. Quisque maximus at urna nec laoreet. Suspendisse potenti. Vestibulum rhoncus sem ut mi pellentesque, in vestibulum erat blandit. Aliquam sodales dui ac maximus consectetur. Duis quis est vehicula, imperdiet nisl nec, fermentum erat. Duis tortor diam, pharetra eu euismod in, vehicula non eros. Curabitur facilisis dui at erat ultrices gravida. In at nunc ultricies, pulvinar mi vel, sagittis mauris. Praesent pharetra posuere purus ac imperdiet. Nulla facilisi.</p>\n<p>Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.</p>\n<p>Mauris sed eros in ex maximus volutpat. Suspendisse potenti. Donec lacinia justo consectetur sagittis tempor. Proin ullamcorper nisi vitae auctor rhoncus. Sed tristique aliquam augue. Pellentesque vitae fringilla ligula. Nulla arcu elit, efficitur eu nunc malesuada, eleifend tincidunt orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer mattis orci in bibendum ultricies. Quisque a dui erat. Phasellus et vulputate ipsum. Proin metus ex, lobortis nec ornare eget, bibendum ut sapien. Aliquam in dolor lobortis, aliquam tellus a, congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n<p>Aenean pretium purus augue, ut bibendum erat convallis quis. Cras condimentum quis velit ac mollis. Suspendisse non purus fringilla, venenatis nisl porta, finibus odio. Curabitur aliquet metus faucibus libero interdum euismod. Morbi sed magna nisl. Morbi odio nibh, facilisis vel sapien eu, tempus tincidunt erat. Nullam erat velit, sagittis at purus quis, tristique scelerisque tortor. Pellentesque lacinia tortor id est aliquam viverra. Vestibulum et diam ac ipsum mollis fringilla.</p>");

				const frontmatter = {"title":"Duvet Genius","publishDate":"2020-03-04T00:00:00.000Z","img":"/assets/stock-3.jpg","img_alt":"Pearls of silky soft white cotton, bubble up under vibrant lighting","description":"We developed a virtual showcase for the softest bedding imaginable.\n","tags":["Design","Dev","Branding"]};
				const file = "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/content/work/nested/duvet-genius.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere commodo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ligula vel metus efficitur hendrerit. In hac habitasse platea dictumst. Praesent et mauris ut mi dapibus semper. Curabitur tortor justo, efficitur sit amet pretium cursus, porta eget odio. Cras ac venenatis dolor. Donec laoreet posuere malesuada. Curabitur nec mi tempor, placerat leo sit amet, tincidunt est. Quisque pellentesque venenatis magna, eget tristique nibh pulvinar in. Vestibulum vitae volutpat arcu. Aenean ut malesuada odio, sit amet pellentesque odio. Suspendisse nunc elit, blandit nec hendrerit non, aliquet at magna. Donec id leo ut nulla sagittis sodales.\n\nInteger vitae nibh elit. Suspendisse eget urna eu neque bibendum pharetra. Sed interdum lectus sem, in pulvinar magna dignissim vel. Quisque maximus at urna nec laoreet. Suspendisse potenti. Vestibulum rhoncus sem ut mi pellentesque, in vestibulum erat blandit. Aliquam sodales dui ac maximus consectetur. Duis quis est vehicula, imperdiet nisl nec, fermentum erat. Duis tortor diam, pharetra eu euismod in, vehicula non eros. Curabitur facilisis dui at erat ultrices gravida. In at nunc ultricies, pulvinar mi vel, sagittis mauris. Praesent pharetra posuere purus ac imperdiet. Nulla facilisi.\n\nSed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.\n\nMauris sed eros in ex maximus volutpat. Suspendisse potenti. Donec lacinia justo consectetur sagittis tempor. Proin ullamcorper nisi vitae auctor rhoncus. Sed tristique aliquam augue. Pellentesque vitae fringilla ligula. Nulla arcu elit, efficitur eu nunc malesuada, eleifend tincidunt orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer mattis orci in bibendum ultricies. Quisque a dui erat. Phasellus et vulputate ipsum. Proin metus ex, lobortis nec ornare eget, bibendum ut sapien. Aliquam in dolor lobortis, aliquam tellus a, congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nAenean pretium purus augue, ut bibendum erat convallis quis. Cras condimentum quis velit ac mollis. Suspendisse non purus fringilla, venenatis nisl porta, finibus odio. Curabitur aliquet metus faucibus libero interdum euismod. Morbi sed magna nisl. Morbi odio nibh, facilisis vel sapien eu, tempus tincidunt erat. Nullam erat velit, sagittis at purus quis, tristique scelerisque tortor. Pellentesque lacinia tortor id est aliquam viverra. Vestibulum et diam ac ipsum mollis fringilla.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
