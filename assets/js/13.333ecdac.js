(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{361:function(v,_,t){"use strict";t.r(_);var a=t(42),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"程序是怎样跑起来的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序是怎样跑起来的"}},[v._v("#")]),v._v(" 程序是怎样跑起来的")]),v._v(" "),t("blockquote",[t("p",[v._v("《程序是怎样跑起来的》读书笔记")])]),v._v(" "),t("h2",{attrs:{id:"cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[v._v("#")]),v._v(" CPU")]),v._v(" "),t("p",[t("code",[v._v("CPU")]),v._v("由寄存器("),t("code",[v._v("Register")]),v._v(")、控制器、运算器和时钟组成。其中寄存器对于程序员最重要，因为"),t("strong",[v._v("程序是把寄存器作为对象来描述的")]),v._v("。")]),v._v(" "),t("p",[v._v("汇编语言"),t("code",[v._v("assembly")]),v._v("采用助记符"),t("code",[v._v("memonic")]),v._v("来编写程序，每一个原本是电气信号的机器语言指令都会有一个与其相应的助记符，助记符通常为指令功能的英语单词的简写。例如，"),t("code",[v._v("mov")]),v._v("和"),t("code",[v._v("add")]),v._v("分别是数据的存储"),t("code",[v._v("move")]),v._v("和相加"),t("code",[v._v("addition")]),v._v("的简写。汇编语言编写的程序转化成机器语言的过程被称为"),t("strong",[v._v("汇编")]),v._v("；反之为"),t("strong",[v._v("反汇编")]),v._v("。")]),v._v(" "),t("p",[v._v("根据功能的不同，寄存器大致划分为八类。在"),t("code",[v._v("CPU")]),v._v("中程序计数器、累加寄存器、标志寄存器、指令寄存器和栈寄存器都只有一个，基址寄存器、变址寄存器和通用寄存器都不止一个。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.haozhenjia.com/blog/register.jpg",alt:"寄存器的分类"}})]),v._v(" "),t("h3",{attrs:{id:"程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[v._v("#")]),v._v(" 程序计数器")]),v._v(" "),t("p",[v._v("程序计数器决定着程序的流程。只有1行的有用程序是很少见的，存储指令和数据的内存，是通过地址来划分的。操作系统把程序从硬盘复制到内存后，会将程序计数器设定为开始位置的地址。然后程序便开始运行。"),t("code",[v._v("CPU")]),v._v("每执行一个指令，程序计数器的值就会自动加"),t("code",[v._v("1")]),v._v("（当执行的指令占据多个内存地址时，增加与指令长度相应的数值）。"),t("code",[v._v("CPU")]),v._v("的控制器就会参照程序计数器的数值，从内存中读取命令并执行。")]),v._v(" "),t("h3",{attrs:{id:"条件分支和循环机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件分支和循环机制"}},[v._v("#")]),v._v(" 条件分支和循环机制")]),v._v(" "),t("p",[v._v("程序的流程分为顺序执行、条件分支和循环三种：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("顺序执行")]),v._v("是指按照地址内容的顺序执行指令")]),v._v(" "),t("li",[t("strong",[v._v("条件分支")]),v._v("是指根据条件执行任意地址的指令")]),v._v(" "),t("li",[t("strong",[v._v("循环")]),v._v("是指重复执行同一地址的指令")])]),v._v(" "),t("p",[t("strong",[v._v("顺序执行")]),v._v("时，每执行一个指令程序计数器的值就自动加1（或指令长度相应的数值），条件分支和循环时，机器语言的指令需要将程序计数器的值设定为任意地址。这就需要用到"),t("strong",[v._v("跳转指令")]),v._v("了，它会参照当前执行的运算结果来判断是否跳转。")]),v._v(" "),t("p",[t("strong",[v._v("标志寄存器")]),v._v("用来保存当前"),t("strong",[v._v("累加寄存器")]),v._v("的运算结果是负数、零还是正数，也可以存放溢出和奇偶校验的结果。")]),v._v(" "),t("p",[v._v("以"),t("code",[v._v("32")]),v._v("位"),t("code",[v._v("CPU")]),v._v("的标志寄存器为例，第一个字节位、第二个字节位和第三个字节位的值为1时，分别表示运算结果分别为正数、零和负数。")]),v._v(" "),t("p",[t("strong",[v._v("程序中的比较指令，就是在CPU内部做减法运算。")])]),v._v(" "),t("h3",{attrs:{id:"函数的调用机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数的调用机制"}},[v._v("#")]),v._v(" 函数的调用机制")]),v._v(" "),t("p",[v._v("函数调用处理是通过把程序计数器的值设定成函数的存储地址来实现的。")]),v._v(" "),t("p",[v._v("函数的调用需要在完成函数内部的处理后，处理流程再返回到函数调用点（函数调用指令的下一个地址）。因此单纯的跳转指令无法实现函数的调用。")]),v._v(" "),t("p",[v._v("机器语言的"),t("code",[v._v("call")]),v._v("指令和"),t("code",[v._v("return")]),v._v("指令用来处理函数的调用。函数调用使用的是"),t("code",[v._v("call")]),v._v("指令。")]),v._v(" "),t("p",[v._v("在将函数的入口地址设定到程序计数器之前，"),t("code",[v._v("call")]),v._v("指令会把调用函数后要执行的指令地址存储在名为栈的主存内。")]),v._v(" "),t("p",[v._v("函数处理完毕后，再通过函数的出口来执行"),t("code",[v._v("return")]),v._v("命令。"),t("code",[v._v("return")]),v._v("命令的功能是把保存在栈中的地址设定到程序计数器中。")]),v._v(" "),t("h3",{attrs:{id:"通过地址和索引实现数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过地址和索引实现数组"}},[v._v("#")]),v._v(" 通过地址和索引实现数组")]),v._v(" "),t("p",[v._v("数组是指同样长度的数据在内存中进行连续排列的数据构造。用一个数组名来表示全体数据，通过索引来区分数组的各个数据（元素）。")]),v._v(" "),t("p",[v._v("通过基址寄存器和变址寄存器，可以对主内存上特定的内存区域进行划分，从而实现类似于数组的操作。一个内存区域，将开始地址存入基址寄存器，实际的内存地址等于基址寄存器+变址寄存器。")]),v._v(" "),t("p",[v._v("按照功能，"),t("code",[v._v("CPU")]),v._v("能执行的机器语言指令大体可以分为四类：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.haozhenjia.com/blog/instruction.jpg",alt:"机器语言的指令分类"}})]),v._v(" "),t("h2",{attrs:{id:"数据是用二进制数表示的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据是用二进制数表示的"}},[v._v("#")]),v._v(" 数据是用二进制数表示的")]),v._v(" "),t("p",[v._v("计算机处理信息的最小单位——位("),t("code",[v._v("bit")]),v._v(")，就相当于二进制中的一位。8位二进制数被称为一个字节(Byte)。字节是最基本的信息计量单位。")]),v._v(" "),t("p",[t("strong",[v._v("位是最小单位，字节是基本单位。")])]),v._v(" "),t("h3",{attrs:{id:"移位运算和乘除运算的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移位运算和乘除运算的关系"}},[v._v("#")]),v._v(" 移位运算和乘除运算的关系")]),v._v(" "),t("p",[v._v("移位运算指的是将二进制数值的各数位进行左右移位（"),t("code",[v._v("shift")]),v._v("=移位）的运算。有左移（向高位方向）和右移（向低位方向）两种。")]),v._v(" "),t("p",[v._v("移位运算可以通过数位移动来代替乘法运算和除法运算。讲一个正数，左移两位表示将数值放大四倍，右移两位表示数值变为原来的1/4。")]),v._v(" "),t("h3",{attrs:{id:"补位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补位"}},[v._v("#")]),v._v(" 补位")]),v._v(" "),t("p",[v._v("右移之后，用了填充空出来的高位的数值，有0和1两种形式。区分这两种方式，需要先掌握二进制数表示负数的方法。")]),v._v(" "),t("p",[v._v("二进制数中表示负数值时，会把最高位作为符号来使用。符号位是0时表示正数，符号位是1时表示负数。计算机在做减法运算时，内部是通过加法运算来实现减法运算的。因此在表示负数时就需要使用“二进制的补数”，即用正数来表示负数。")]),v._v(" "),t("p",[v._v("获得补数的方法是将二进制数的各数位的数值全部取反，然后再将结果加1。例如用8位二进制数表示1时为"),t("code",[v._v("00000001")]),v._v("，其补数为"),t("code",[v._v("11111110")]),v._v("，然后再加1，即为"),t("code",[v._v("11111111")]),v._v("。")]),v._v(" "),t("p",[v._v("此时，"),t("code",[v._v("1+(-1)")]),v._v("的二进制表示就是"),t("code",[v._v("00000001+11111111")]),v._v("，最高位溢出计算机会直接忽略，得到"),t("code",[v._v("00000000")]),v._v("，也就是"),t("code",[v._v("0")])]),v._v(" "),t("h3",{attrs:{id:"逻辑右移和算术右移的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑右移和算术右移的区别"}},[v._v("#")]),v._v(" 逻辑右移和算术右移的区别")]),v._v(" "),t("p",[v._v("右移有移位后在最高位补0和补1两种情况。当二进制数的值表示图形模式而非数值时，移位后需要在最高位补0，被称为"),t("strong",[v._v("逻辑右移")]),v._v("。")]),v._v(" "),t("p",[v._v("将二进制数作为带符号的数值进行运算时，移位后要在最高位填充移位前符号位的值（0或1），被称为算术右移。其中用补数表示的负数值，右移后在空出来的最高位补1，正数则补0。")]),v._v(" "),t("p",[v._v("左移时，无论是图形模式（逻辑左移）还是相乘运算（算术左移），都只需在空出来的低位补0即可。")]),v._v(" "),t("p",[t("strong",[v._v("符号扩充")]),v._v("是指在保持值不变的前提下将其转换成更高位数的二进制数。例如8位转换16位/32位。符号扩充的方法是用符号位的值（0或者1）填充高位即可。")]),v._v(" "),t("h2",{attrs:{id:"计算机进行小数运算时出错的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机进行小数运算时出错的原因"}},[v._v("#")]),v._v(" 计算机进行小数运算时出错的原因")]),v._v(" "),t("h2",{attrs:{id:"内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[v._v("#")]),v._v(" 内存")]),v._v(" "),t("p",[v._v("高级程序语言中的数据类型表示的是占据内存区域的大小和存储在该内存区域的数据类型。")]),v._v(" "),t("p",[v._v("计算机是进行数据处理的设备，"),t("strong",[v._v("程序表示的就是数据处理顺序和数据结构。")])]),v._v(" "),t("h3",{attrs:{id:"内存的物理机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存的物理机制"}},[v._v("#")]),v._v(" 内存的物理机制")]),v._v(" "),t("p",[v._v("内存集成电路(integrated circuit, "),t("code",[v._v("IC")]),v._v(")中有电源、地址信号、数据信号、控制信号等用于输入输出的大量引脚，用过为其指定的地址("),t("code",[v._v("address")]),v._v(")，来进行数据的读写。内存是以字节为存储单位的，数据信号引脚共有8个。地址信号引脚的个数，能够得出内存的容量。")]),v._v(" "),t("h3",{attrs:{id:"内存的逻辑模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存的逻辑模型"}},[v._v("#")]),v._v(" 内存的逻辑模型")]),v._v(" "),t("p",[v._v("关于内存的逻辑模型，大部分参考书都会用类似楼房的图形表示内存。1层可以存放1个字节的数据，楼层号表示就是地址。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.haozhenjia.com/blog/memory.jpg",alt:"内存的逻辑模型"}})]),v._v(" "),t("p",[v._v("编程语言中的"),t("strong",[v._v("数据类型")]),v._v("表示存储的是何种类型的数据。从内存来看，就是占用的内存大小（占有的楼层数），即是物理上以1个字节为单位来逐一读写数据的内存，在程序中，通过指定其类型（变量的数据类型等），能实现以特定字节数为单位来进行读写。对于数据而言，"),t("strong",[v._v("数据类型")]),v._v("不同，占用的内寸大小也不一样。")]),v._v(" "),t("h3",{attrs:{id:"指针"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[v._v("#")]),v._v(" 指针")]),v._v(" "),t("p",[v._v("指针也是一种变量，所表示的不是数据的值，而是存储着数据的内存地址。")]),v._v(" "),t("h3",{attrs:{id:"磁盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘"}},[v._v("#")]),v._v(" 磁盘")]),v._v(" "),t("p",[v._v("磁盘是通过把其物理表面划分成多个空间来使用的。划分的方式有"),t("strong",[v._v("扇区方式")]),v._v("和"),t("strong",[v._v("可变长方式")]),v._v("两种，前者是指将磁盘划分为固定长度的空间，后者则是指把磁盘划分为长度可变的空间。")]),v._v(" "),t("p",[t("code",[v._v("Windows")]),v._v("计算机所使用的硬盘和软盘，采用的都是扇区方式。扇区方式中，把磁盘表面分成若干个同心圆的空间就是磁道，把磁道按照固定大小（能存储的数据长度相同）划分而成的空间就是扇区。"),t("code",[v._v("Windows")]),v._v("中一般1个扇区是512字节,在逻辑方面（软件方面）对磁盘进行读写的单位是扇区整数倍"),t("strong",[v._v("簇")]),v._v("。")]),v._v(" "),t("p",[v._v("不同的文件是不能存储在同一个簇中的，因此，不管是多么小的文件，都会占用1簇的空间。因此，只有1字节的文件使用空间也了512字节。")]),v._v(" "),t("h2",{attrs:{id:"从源文件到可执行文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从源文件到可执行文件"}},[v._v("#")]),v._v(" 从源文件到可执行文件")]),v._v(" "),t("p",[v._v("程序给变量及函数分配了虚拟的内存地址。在程序运行时，虚拟的内存地址会转换成实际的内存地址。链接器会在EXE文件的开头，追加转换内存地址所需的必要信息。这个信息称为"),t("strong",[v._v("再配置信息")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("再配置信息")]),v._v("会生成变量和函数的"),t("strong",[v._v("相对地址")]),v._v("。"),t("strong",[v._v("相对地址")]),v._v("表示的是相对于基点地址的偏移量，也就是相对距离。")]),v._v(" "),t("p",[v._v("在源代码中，变量及函数是在不同位置分散记述的，但链接后可执行文件中，变量及函数就会变成一个连续排列的组。")]),v._v(" "),t("p",[v._v("可执行文件的内容分为再配置信息、变量组和函数组着三部分。")]),v._v(" "),t("p",[v._v("当程序加载到内存后，还会额外生成另外两个组，栈和堆。")]),v._v(" "),t("p",[t("strong",[v._v("栈")]),v._v("是用来存储函数内部临时使用的变量（局部变量），以及函数调用时所用的参数的内存区域。"),t("strong",[v._v("堆")]),v._v("是用来存储程序运行时的任意数据及对象的内存领域。")]),v._v(" "),t("p",[v._v("因而，内存中的程序，就是由用于变量的内存空间、用于函数的内存空间、用于栈的内存空间、用于堆的内存空间这4部分构成的。")]),v._v(" "),t("p",[v._v("栈及堆的相似之处在于，他们的内存空间都是在程序运行时得到申请分配的。")]),v._v(" "),t("p",[v._v("在内存的使用方法上，二者存在些许不同。栈中对数据进行存储和舍弃（清理处理）的代码，是由编译器自动生成的，因此不需要程序员的参与。使用栈的数据的内存空间，每当函数被调用时都会得到申请分配，并在函数处理完毕后自动释放。与此相对，堆的内存空间，则要根据程序员编写的程序，来明确进行申请分配或释放。")]),v._v(" "),t("p",[v._v("如果没有在程序中明确释放堆的内存空间，那么即使在处理完毕后，该内存空间仍会一直残留。这个现象称为内存泄露（memory leak）。")]),v._v(" "),t("h2",{attrs:{id:"汇编语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#汇编语言"}},[v._v("#")]),v._v(" 汇编语言")]),v._v(" "),t("p",[v._v("伪指令"),t("code",[v._v("proc")]),v._v("和"),t("code",[v._v("endp")]),v._v("围起来的部分，表示的是过程（procedure）的范围。在汇编语言中，这种相当于C语言的函数的形式称为"),t("strong",[v._v("过程")]),v._v("。")]),v._v(" "),t("p",[v._v("在汇编语言中，1行表示对CPU的一个指令。汇编语言指令的语法结构是操作码+操作数（也存在只有操作码没有操作数的指令）。")]),v._v(" "),t("p",[t("strong",[v._v("操作码")]),v._v("表示的是指令动作，"),t("strong",[v._v("操作数")]),v._v("表示的是指令对象。")]),v._v(" "),t("p",[t("strong",[v._v("操作数")]),v._v("中指定了寄存器名、内存地址、常数等。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.haozhenjia.com/blog/operation_code.jpg",alt:"操作码"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);