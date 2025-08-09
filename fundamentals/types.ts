function primaryTypes() {
  const x: string = "string type";
  const y: number = 9.323; // float or integer
  const bool: boolean = true;
  const integer: bigint | undefined = undefined; // if exceeds 2^53 - 1;
  const userId = Symbol("hello");
  const nullable: null = null; // explicity empty
  const undef: undefined = undefined; // missing, default for missing object properties

  const primitives = {
    x,
    y,
    bool,
    integer,
    userId,
    nullable,
    undef,
  };

  console.log(primitives);
  return primitives;
}

primaryTypes();

function operators() {
  const addition = 1 + 1;
  const division = 1 - 1;
  const multiply = 2 * 2;
  const remainder = 2 % 2;
  const power = 2 ** 10;
  const negativeValue = -multiply;

  // postfix and prefix doesn't work in const variable
  //   const postfix = ++division;

  // we can change the reference value but not the reference in const
  const object: any = {};
  object["yep"] = "add key";

  // bitwise &, |, ^, ~, >>, << , >>>

  const values = {
    addition,
    division,
    multiply,
    remainder,
    power,
    negativeValue,
    object,
  };

  console.log(values);
  return values;
}

operators();
