/**HTML DOM 
 * Element: id, class, tagName, CSS selector, HTML collection
 * Attribute
 * Text
*/
// Elemtent
// ID: duy  nhất trong trang web nên Emlement không có s cuối cùng
var id = document.getElementById('a');
console.log([id]);

// Class: có thể có nhiều class nên Elements có s cuối cùng
var cl = document.getElementsByClassName('abc');
console.log(cl);

// cl nằm trong HTML Collection, giống mảng nhưng không có các phương thức map, reduce, fillter, ...

// TagName: tên thẻ trong trang web.
var tag = document.getElementsByTagName('p');
console.log(tag);

// Css Selector: là mẫu chọn phần tử HTML mà muốn định nghĩa phong cách(css cho nó), vd: #id, .className
var csl = document.querySelector('.abc');
console.log(csl);
// Ở trên thì nếu có nhiều class giống nhau thì nó sẽ lẫy phần tử đầu tiên
// Muốn chọn con thứ 2, thúw 3 thì dùng như css bình thường, first-child, last-child,...

var csls = document.querySelectorAll('.abc');
console.log(csls);
//  ở trên ta dùng querySelectorAll thì trả về hết, nếu muốn truy ũuất từng phần tủ thì 
// ta dùng như mảng, nghĩa là dùng chỉ số của nó
// các phần tử được console.log ra nằm trong NodeList, gần giống HTML Collection

console.log(csls[2]);

// HTML Collection: chỉ một số thẻ như thẻ form, thẻ a, images,... nằm trong HTML Collection
// thẻ a phải có thuộc tính name mới được tính.
//  nếu là form thì dùng document.forms.formName hoặc document.forms['formName'], bao gồm cả id;
// nếu là thẻ a thì có thuộc tính document.anchors

console.log(document.forms['formm']);
console.log(document.anchors);
