var object = {
    f1: () => {
        console.log(this);
        let f2 = () => console.log (this);
        f2();
        setTimeout(f2, 1000);
    }
}
object.f1();