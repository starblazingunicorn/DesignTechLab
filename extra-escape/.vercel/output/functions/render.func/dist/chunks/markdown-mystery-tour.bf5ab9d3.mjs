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

				const html = updateImageReferences("<h2 id=\"level-two-heading\">Level-two heading</h2>\n<blockquote>\n<p>Tell me and I forget. Teach me and I remember. Involve me and I learn.</p>\n</blockquote>\n<p>Lorem ipsum dolor sit amet, <a href=\"https://astro.build/\">Astro</a> makes people happy. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut sem nulla pharetra diam sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.</p>\n<p>Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Eget gravida cum sociis natoque penatibus. Cras fermentum odio eu feugiat pretium nibh. Proin nibh nisl condimentum id venenatis. Porta nibh venenatis cras sed felis eget velit. Id diam vel quam elementum pulvinar etiam non.</p>\n<h3 id=\"level-three-heading\">Level-three heading</h3>\n<p>Ultrices tincidunt arcu non sodales neque sodales ut. Sed enim ut sem viverra aliquet eget sit amet. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Viverra accumsan in nisl nisi scelerisque eu ultrices. In massa tempor nec feugiat nisl pretium fusce.</p>\n<h3 id=\"level-three-heading-1\">Level-three heading</h3>\n<p>Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.</p>\n<p>Aenean pretium purus augue, ut bibendum erat convallis quis. Cras condimentum quis velit ac mollis. Suspendisse non purus fringilla, venenatis nisl porta, finibus odio. Curabitur aliquet metus faucibus libero interdum euismod. Morbi sed magna nisl. Morbi odio nibh, facilisis vel sapien eu, tempus tincidunt erat. Nullam erat velit, sagittis at purus quis, tristique scelerisque tortor. Pellentesque lacinia tortor id est aliquam viverra. Vestibulum et diam ac ipsum mollis fringilla.</p>\n<h4 id=\"level-four-heading\">Level-four heading</h4>\n<ul>\n<li>We noted this</li>\n<li>And also this other point</li>\n</ul>");

				const frontmatter = {"title":"Markdown Mystery Tour","publishDate":"2020-03-02T00:00:00.000Z","img":"/assets/stock-1.jpg","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"We designed a whodunnit-style game to introduce Markdown formatting. Suspense — suspicion — syntax!\n","tags":["Design","Dev","User Testing"]};
				const file = "/Users/abevv/projekt/side-projects/DesignTechLab/extra-escape/src/content/work/markdown-mystery-tour.md";
				const url = undefined;
				function rawContent() {
					return "\n## Level-two heading\n\n> Tell me and I forget. Teach me and I remember. Involve me and I learn.\n\nLorem ipsum dolor sit amet, <a href=\"https://astro.build/\">Astro</a> makes people happy. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut sem nulla pharetra diam sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.\n\nArcu dui vivamus arcu felis bibendum ut tristique et egestas. Eget gravida cum sociis natoque penatibus. Cras fermentum odio eu feugiat pretium nibh. Proin nibh nisl condimentum id venenatis. Porta nibh venenatis cras sed felis eget velit. Id diam vel quam elementum pulvinar etiam non.\n\n### Level-three heading\n\nUltrices tincidunt arcu non sodales neque sodales ut. Sed enim ut sem viverra aliquet eget sit amet. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Viverra accumsan in nisl nisi scelerisque eu ultrices. In massa tempor nec feugiat nisl pretium fusce.\n\n### Level-three heading\n\nSed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.\n\nAenean pretium purus augue, ut bibendum erat convallis quis. Cras condimentum quis velit ac mollis. Suspendisse non purus fringilla, venenatis nisl porta, finibus odio. Curabitur aliquet metus faucibus libero interdum euismod. Morbi sed magna nisl. Morbi odio nibh, facilisis vel sapien eu, tempus tincidunt erat. Nullam erat velit, sagittis at purus quis, tristique scelerisque tortor. Pellentesque lacinia tortor id est aliquam viverra. Vestibulum et diam ac ipsum mollis fringilla.\n\n#### Level-four heading\n\n- We noted this\n- And also this other point\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"level-two-heading","text":"Level-two heading"},{"depth":3,"slug":"level-three-heading","text":"Level-three heading"},{"depth":3,"slug":"level-three-heading-1","text":"Level-three heading"},{"depth":4,"slug":"level-four-heading","text":"Level-four heading"}];
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
