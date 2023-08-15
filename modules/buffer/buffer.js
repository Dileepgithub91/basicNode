/* 
Buffer: Convert the string "abc" into a stream of binary data:
The buffers module provides a way of handling streams of binary data.


///.............Buffer Properties and Methods................
Method..	                      Description...
alloc()	Creates a Buffer object of the specified length
allocUnsafe()	Creates a non-zero-filled Buffer of the specified length
allocUnsafeSlow	Creates a non-zero-filled and non-pooled Buffer of the specified length
byteLength()	Returns the numbers of bytes in a specified object
compare()	Compares two Buffer objects
concat()	Concatenates an array of Buffer objects into one Buffer object
copy()	Copies the specified number of bytes of a Buffer object
entries()	Returns an iterator of "index" "byte" pairs of a Buffer object
equals()	Compares two Buffer objects, and returns true if it is a match, otherwise false
fill()	Fills a Buffer object with the specified values
from()	Creates a Buffer object from an object (string/array/buffer)
includes()	Checks if the Buffer object contains the specified value. 
Returns true if there is a match, otherwise false
indexOf()	Checks if the Buffer object contains the specified value.
 Returns the first occurrence, otherwise -1
isBuffer()	Checks if an object is a Buffer object
isEncoding()	Checks if the Buffer object supports the specified encoding
keys()	Returns an array of keys in a Buffer object
lastIndexOf()	Checks if the Buffer object contains the specified value. 
Returns the first occurrence, starting from the end, otherwise -1
length	Returns the length of a Buffer object, in bytes
poolSize	Sets or returns the number of bytes used for pooling
readDoubleBE()	Reads a 64 bit double from a Buffer object, returns the result in big endian
readDoubleLE()	Reads a 64 bit double from a Buffer object, returns the result in little endian
readFloatBE()	Reads a 32 bit float from a Buffer object, returns the result in big endian
readFloatLE()	Reads a 32 bit float from a Buffer object, returns the result in little endian
readInt8()	Reads a 8 bit integer from a Buffer object
readInt16BE()	Reads a 16 bit integer from a Buffer object, returns the result in big endian
readInt16LE()	Reads a 16 bit integer from a Buffer object, returns the result in little endian
readInt32BE()	Reads a 32 bit integer from a Buffer object, returns the result in big endian
readInt32LE()	Reads a 32 bit integer from a Buffer object, returns the result in little endian
readIntBE()	Reads the specified number of bytes from a Buffer object, returns the result in big endian
readIntLE()	Reads the specified number of bytes from a Buffer object, returns the result in little endian
readUInt8()	Reads an unsigned 8 bit integer from a Buffer object
readUInt16BE()	Reads an unsigned 16 bit integer from a Buffer object, returns the result in big endian
readUInt16LE()	Reads an unsigned 16 bit integer from a Buffer object, returns the result in little endian
readUInt32BE()	Reads an unsigned 32 bit integer from a Buffer object, returns the result in big endian
readUInt32LE()	Reads an unsigned 32 bit integer from a Buffer object, returns the result in little endian
readUintBE()	Reads the specified number of bytes from a Buffer object, returns the result as an unsigned integer
readUIntLE()	Reads the specified number of bytes from a Buffer object, returns the result as an unsigned integer
slice()	Slices a Buffer object into a new Buffer objects starting and ending at the specified positions
swap16()	Swaps the byte-order of a 16 bit Buffer object
swap32()	Swaps the byte-order of a 32 bit Buffer object
swap64()	Swaps the byte-order of a 64 bit Buffer object
toString()	Returns a string version of a Buffer object
toJSON()	Returns a JSON version of a Buffer object
values()	Returns an array of values in a Buffer object
write()	Writes a specified string to a Buffer object
writeDoubleBE()	Writes the specified bytes, using big endian, to a Buffer object. The bytes should be 64 bit double.
writeDoubleLE()	Writes the specified bytes, using little endian, to a Buffer object. The bytes should be 64 bit double.
writeFloatBE()	Writes the specified bytes, using big endian, to a Buffer object. The bytes should be 32 bit float.
writeFloatLE()	Writes the specified bytes, using little endian, to a Buffer object. The bytes should be 32 bit float.
writeInt8()	Writes the specified bytes to a Buffer object. The bytes should be 8 bit integer
writeInt16BE()	Writes the specified bytes, using big endian, to a Buffer object. The bytes should be 16 bit integer.
writeInt16LE()	Writes the specified bytes, using little endian, to a Buffer object. The bytes should be 16 bit integer.
writeInt32BE()	Writes the specified bytes, using big endian, to a Buffer object. The bytes should be 32 bit integer.
writeInt32LE()	Writes the specified bytes, using little endian, to a Buffer object. The bytes should be 32 bit integer.
writeIntBE()	Writes the specified bytes, using big endian, to a Buffer object.
writeIntLE()	Writes the specified bytes, using little endian, to a Buffer object.
writeUInt8()	Writes the specified bytes to a Buffer object. The bytes should be 8 bit unsigned integer
writeUInt16BE()	Writes the specified bytes, using big endian, to a Buffer object. The bytes should be 16 bit unsigned integer.
writeUInt16LE()	Writes the specified bytes, using little endian, to a Buffer object. The bytes should be 16 bit unsigned integer.
writeUInt32BE()	Writes the specified bytes, using big endian, to a Buffer object. The bytes should be 32 bit unsigned integer.
writeUInt32LE()	Writes the specified bytes, using little endian, to a Buffer object. The bytes should be 32 bit unsigned integer.
writeUIntBE()	Writes the specified bytes, using big endian, to a Buffer object
writeUIntLE()	Writes the specified bytes, using little endian, to a Buffer object
*/


//..........Syntax...........
//var buf = Buffer.alloc(15);


//.............Example..............

// var buf = Buffer.from('Dileep');
// console.log(buf);
// console.log(buf[0]);
//  console.log(buf.toString());
//  var bf=Buffer.alloc(4);
// console.log(bf);
// var b1=Buffer.allocUnsafeSlow(3);
// console.log(b1)

const buffer=new Buffer.from("Dileep");//6
//console.log(buffer);//binary data
//console.log(buffer.toJSON()); //ascii code
//buffer.write("coshhhhd"); //codeep
//console.log(buffer.toString());//string
//console.log(Buffer.isBuffer(buffer));//check 
//console.log(buffer[1]);//provide ASCII

console.log(buffer.length);//length
console.log(buffer.values)//
//console.log(buffer.alloc(4))
//allocUnsafe()
                








