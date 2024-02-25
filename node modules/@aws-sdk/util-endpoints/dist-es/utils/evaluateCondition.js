import { EndpointError } from "../types";
import { callFunction } from "./callFunction";
export const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(fnArgs, options);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};
