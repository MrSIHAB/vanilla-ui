import { Tag, TagOptions } from "../core/tag.js";

// ===================  Form
/**
 * Form options interface
 * @interface FormOptions
 * @extends TagOptions
 * @property {string} [method] - The HTTP method to use when submitting the form.
 * @property {string} [action] - The URL to which the form data will be submitted.
 * @property {string} [enctype] - The encoding type to use when submitting the form.
 * @property {string} [target] - The target window or frame to which the form will be submitted.
 * @property {string} [acceptCharset] - The character set to use for the form submission.
 * @property {boolean} [noValidate] - If true, the form will not be validated when submitted.
 * @property {string} [autoComplete] - The auto-complete behavior for the form.
 * @property {boolean} [autoFocus] - If true, the form will be focused when the page loads.
 * @property {string} [name] - The name of the form.
 * @property {function} [onSubmit] - The function to call when the form is submitted.
 * @property {function} [onReset] - The function to call when the form is reset.
 * @property {function} [onChange] - The function to call when the form is changed.
 * @property {function} [onInput] - The function to call when the form is inputted.
 * @property {function} [onInvalid] - The function to call when the form is invalid.
 */
export interface FormOptions extends TagOptions {
    method?: HTMLFormElement["method"];
    action?: HTMLFormElement["action"];
    enctype?: HTMLFormElement["enctype"];
    target?: HTMLFormElement["target"];
    acceptCharset?: HTMLFormElement["acceptCharset"];
    noValidate?: boolean;
    autoComplete?: HTMLFormElement["autocomplete"];
    autoFocus?: boolean;
    name?: string;
    onSubmit?: (event: SubmitEvent) => void;
    onReset?: (event: Event) => void;
    onChange?: (event: Event) => void;
    onInput?: (event: Event) => void;
    onInvalid?: (event: Event) => void;
}
/**
 * Creates a form element with the specified options.
 * @param {FormOptions} options - The options for the form element.
 * @return {HTMLFormElement} The created form element.
 * @example
 * const form = Form({
 *     method: "POST",
 *     action: "/submit",
 *     enctype: "application/x-www-form-urlencoded",
 *     target: "_self",
 *     acceptCharset: "UTF-8",
 *     noValidate: false,
 *     autoComplete: "on",
 *     autoFocus: true,
 *     name: "myForm",
 *     onSubmit: onSubmit,
 *     onReset: onReset,
 *     onChange: onChange,
 *     onInput: onInput,
 *     onInvalid: onInvalid,
 *     id: "signin-form"
 *     ... : ...other options
 * });
 */
export const Form = (options: FormOptions): HTMLFormElement => {
    const formTag = Tag("form", options) as HTMLFormElement;
    const {
        method,
        action,
        enctype,
        target,
        acceptCharset,
        noValidate,
        autoComplete,
        autoFocus,
        name,
    } = options;
    if (method) formTag.method = method;
    if (action) formTag.action = action;
    if (enctype) formTag.enctype = enctype;
    if (target) formTag.target = target;
    if (acceptCharset) formTag.acceptCharset = acceptCharset;
    if (noValidate) formTag.noValidate = noValidate;
    if (autoComplete) formTag.autocomplete = autoComplete;
    if (autoFocus) formTag.autofocus = autoFocus;
    if (name) formTag.name = name;
    if (options.onSubmit) formTag.addEventListener("submit", options.onSubmit);
    if (options.onReset) formTag.addEventListener("reset", options.onReset);
    if (options.onChange) formTag.addEventListener("change", options.onChange);
    if (options.onInput) formTag.addEventListener("input", options.onInput);
    if (options.onInvalid) {
        formTag.addEventListener("invalid", options.onInvalid);
    }
    return formTag;
};

// ===================  Input
/**
 * Input options interface
 * @interface InputOptions
 * @extends TagOptions
 */
export interface InputOptions extends TagOptions {
    type?: HTMLInputElement["type"];
    name?: HTMLInputElement["name"];
    value?: HTMLInputElement["value"];
    placeholder?: HTMLInputElement["placeholder"];
    required?: boolean;
    readOnly?: boolean;
    min?: HTMLInputElement["min"];
    max?: HTMLInputElement["max"];
    minLength?: HTMLInputElement["minLength"];
    maxLength?: HTMLInputElement["maxLength"];
    pattern?: HTMLInputElement["pattern"];
    size?: HTMLInputElement["size"];
    step?: HTMLInputElement["step"];
    autoComplete?: HTMLInputElement["autocomplete"];
    autoFocus?: boolean;
    accept?: HTMLInputElement["accept"];
    onInput?: (event: Event) => void;
    onInvalid?: (event: Event) => void;
    onSelect?: (event: Event) => void;
}
/**
 * Creates an input element with the specified options.
 * @param {InputOptions} options - The options for the input element.
 * @return {HTMLInputElement} The created input element.
 * @example
 * const input = Input({
 *     type: "text",
 *     name: "username",
 *     value: "JohnDoe",
 *     placeholder: "Enter your username",
 *     required: true,
 *     disabled: false,
 *     readOnly: false,
 *     min: "1",
 *     max: "100",
 *     minLength: 3,
 *     maxLength: 20,
 *     pattern: "[a-zA-Z0-9]+",
 *     size: 20,
 *     step: 1,
 *     autoComplete: "on",
 *     autoFocus: true,
 *     accept: ".txt",
 *     onChange: onChange,
 *     onInput: onInput,
 *     onInvalid: onInvalid,
 *     onFocus: onFocus,
 *     onBlur: onBlur,
 *     onSelect: onSelect,
 *     id: "username-input"
 *     ... : ...other options
 * });
 */
export const Input = (options: InputOptions): HTMLInputElement => {
    const inputTag = Tag("input", options) as HTMLInputElement;
    const {
        type,
        name,
        value,
        placeholder,
        required,
        disabled,
        readOnly,
        min,
        max,
        minLength,
        maxLength,
        pattern,
        size,
        step,
        autoComplete,
        autoFocus,
        accept,
    } = options;
    if (type) inputTag.type = type;
    if (name) inputTag.name = name;
    if (value) inputTag.value = value;
    if (placeholder) inputTag.placeholder = placeholder;
    if (required) inputTag.required = required;
    if (disabled) inputTag.disabled = disabled;
    if (readOnly) inputTag.readOnly = readOnly;
    if (min) inputTag.min = min;
    if (max) inputTag.max = max;
    if (minLength) inputTag.minLength = minLength;
    if (maxLength) inputTag.maxLength = maxLength;
    if (pattern) inputTag.pattern = pattern;
    if (size) inputTag.size = size;
    if (step) inputTag.step = step;
    if (autoComplete) inputTag.autocomplete = autoComplete;
    if (autoFocus) inputTag.autofocus = autoFocus;
    if (accept) inputTag.accept = accept;

    if (options.onChange) inputTag.addEventListener("change", options.onChange);
    if (options.onInput) inputTag.addEventListener("input", options.onInput);
    if (options.onInvalid) {
        inputTag.addEventListener("invalid", options.onInvalid);
    }
    if (options.onBlur) inputTag.addEventListener("blur", options.onBlur);
    if (options.onSelect) inputTag.addEventListener("select", options.onSelect);

    return inputTag;
};

// ===================  TextArea
/**
 * TextArea options interface
 * @interface TextAreaOptions
 * @extends TagOptions
 */
export interface TextAreaOptions extends TagOptions {
    name?: HTMLTextAreaElement["name"];
    value?: HTMLTextAreaElement["value"];
    placeholder?: HTMLTextAreaElement["placeholder"];
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    rows?: HTMLTextAreaElement["rows"];
    cols?: HTMLTextAreaElement["cols"];
    wrap?: HTMLTextAreaElement["wrap"];
    maxLength?: HTMLTextAreaElement["maxLength"];
    autoComplete?: HTMLTextAreaElement["autocomplete"];
    autoFocus?: boolean;
    onInput?: (event: Event) => void;
    onInvalid?: (event: Event) => void;
}
/**
 * Creates a textarea element with the specified options.
 * @param {TextAreaOptions} options - The options for the textarea element.
 * @return {HTMLTextAreaElement} The created textarea element.
 * @example
 * const textarea = TextArea({
 *      name: "description",
 *      value: "Enter your description here",
 *      placeholder: "Description",
 *      required: true,
 *      disabled: false,
 *      readOnly: false,
 *      rows: 5,
 *      cols: 40,
 *      wrap: "soft",
 *      maxLength: 500,
 *      autoComplete: "on",
 *      autoFocus: true,
 *      onChange: onChange,
 *      onInput: onInput,
 *      onInvalid: onInvalid,
 *      onFocus: onFocus,
 *      onBlur: onBlur,
 *      id: "description-textarea"
 *      style: {color: blue}
 *      ... : ...other options
 */
export const TextArea = (option: TextAreaOptions): HTMLTextAreaElement => {
    const textAreaTag = Tag("textarea", option) as HTMLTextAreaElement;
    const {
        name,
        value,
        placeholder,
        required,
        disabled,
        readOnly,
        rows,
        cols,
        wrap,
        maxLength,
        autoComplete,
        autoFocus,
    } = option;
    if (name) textAreaTag.name = name;
    if (value) textAreaTag.value = value;
    if (placeholder) textAreaTag.placeholder = placeholder;
    if (required) textAreaTag.required = required;
    if (disabled) textAreaTag.disabled = disabled;
    if (readOnly) textAreaTag.readOnly = readOnly;
    if (rows) textAreaTag.rows = rows;
    if (cols) textAreaTag.cols = cols;
    if (wrap) textAreaTag.wrap = wrap;
    if (maxLength) textAreaTag.maxLength = maxLength;
    if (autoComplete) textAreaTag.autocomplete = autoComplete;
    if (autoFocus) textAreaTag.autofocus = autoFocus;

    if (option.onChange) {
        textAreaTag.addEventListener("change", option.onChange);
    }
    if (option.onInput) textAreaTag.addEventListener("input", option.onInput);
    if (option.onInvalid) {
        textAreaTag.addEventListener("invalid", option.onInvalid);
    }
    if (option.onBlur) textAreaTag.addEventListener("blur", option.onBlur);

    return textAreaTag;
};

// ===================  Label
/**
 * Label options interface
 * @interface LabelOptions
 * @extends TagOptions
 */
export interface LabelOptions extends TagOptions {
    for?: HTMLLabelElement["htmlFor"];
    autoFocus?: boolean;
    onFocus?: (event: FocusEvent) => void;
}
/**
 * Creates a label element with the specified options.
 * @param {LabelOptions} options - The options for the label element.
 * @return {HTMLLabelElement} The created label element.
 * @example
 * const label = Label({
 *      for: "username",
 *      childs: Input({id: "username", type: "text", name: "username"}),
 *      autoFocus: true,
 *      onFocus: onFocus,
 *      onBlur: onBlur,
 *      id: "username-label"
 *      ... : ...other options
 * });
 */
export const Label = (options: LabelOptions): HTMLLabelElement => {
    const labelTag = Tag("label", options) as HTMLLabelElement;
    const { for: htmlFor, autoFocus } = options;
    if (htmlFor) labelTag.htmlFor = htmlFor;
    if (autoFocus) labelTag.autofocus = autoFocus;

    if (options.onFocus) labelTag.addEventListener("focus", options.onFocus);
    if (options.onBlur) labelTag.addEventListener("blur", options.onBlur);

    return labelTag;
};

//  =====================   Select
export interface SelectInterface extends TagOptions {
    childs?: undefined; // * select tag can contain Options. Not Childs
    name: HTMLSelectElement["name"];
    value?: HTMLSelectElement["value"];
    required?: boolean;
    disabled?: boolean;
    size?: HTMLSelectElement["size"];
    multiple?: boolean;
    autoFocus?: boolean;
    options?: Array<HTMLOptionElement | HTMLOptGroupElement>;
    selectedIndex?: number;
    onInput?: (event: Event) => void;
    onInvalid?: (event: Event) => void;
    onFocus?: (event: FocusEvent) => void;
    onSelect?: (event: Event) => void;
}
const Select = (attr: SelectInterface): HTMLSelectElement => {
    const selectTag = Tag("select", attr) as HTMLSelectElement;
    const {
        name,
        value,
        required,
        disabled,
        size,
        multiple,
        autoFocus,
        options,
        selectedIndex,
    } = attr;

    if (name) selectTag.name = name;
    if (value) selectTag.value = value;
    if (required) selectTag.required = required;
    if (disabled) selectTag.disabled = disabled;
    if (size) selectTag.size = size;
    if (multiple) selectTag.multiple = multiple;
    if (autoFocus) selectTag.autofocus = autoFocus;

    // setingup options
    if (options) {
        if (Array.isArray(options)) {
            options.forEach((child) => selectTag.appendChild(child));
        } else {
            selectTag.appendChild(options);
        }
    }
    if (selectedIndex) selectTag.selectedIndex = selectedIndex;

    if (attr.onChange) selectTag.addEventListener("change", attr.onChange);
    if (attr.onInput) selectTag.addEventListener("input", attr.onInput);
    if (attr.onInvalid) {
        selectTag.addEventListener("invalid", attr.onInvalid);
    }
    if (attr.onFocus) selectTag.addEventListener("focus", attr.onFocus);
    if (attr.onBlur) selectTag.addEventListener("blur", attr.onBlur);
    if (attr.onSelect) selectTag.addEventListener("select", attr.onSelect);

    return selectTag;
};

// ===================  Option
/**
 * Option options interface
 * @interface OptionOptions
 * @extends TagOptions
 */
export interface OptionInterface extends TagOptions {
    value?: HTMLOptionElement["value"];
    label?: HTMLOptionElement["label"];
    selected?: boolean;
    disabled?: boolean;
    defaultSelected?: boolean;
    autoFocus?: boolean;
    onInput?: (event: Event) => void;
    onInvalid?: (event: Event) => void;
    onFocus?: (event: FocusEvent) => void;
    for: string;
}

/**
 * Creates an option element with the specified options.
 * @param {OptionOptions} options - The options for the option element.
 * @return {HTMLOptionElement} The created option element.
 * @example
 * const option = Option({
 *      value: "1",
 *      label: "Option 1",
 *      selected: true,
 *      disabled: false,
 *      defaultSelected: false,
 *      autoFocus: true,
 *      onChange: onChange,
 *      onInput: onInput,
 *      onInvalid: onInvalid,
 *      onFocus: onFocus,
 *      onBlur: onBlur,
 *      for: "option-1",
 * });
 */
export const Option = (options: OptionInterface): HTMLOptionElement => {
    const optionTag = Tag("option", options) as HTMLOptionElement;
    const {
        value,
        label,
        selected,
        disabled,
        defaultSelected,
        autoFocus,
    } = options;
    if (value) optionTag.value = value;
    if (label) optionTag.label = label;
    if (selected) optionTag.selected = selected;
    if (disabled) optionTag.disabled = disabled;
    if (defaultSelected) optionTag.defaultSelected = defaultSelected;
    if (autoFocus) optionTag.autofocus = autoFocus;

    return optionTag;
};

/**
 * Creates an optgroup element with the specified options.
 * @param {OptionInterface} options - The options for the optgroup element.
 * @return {HTMLOptGroupElement} The created optgroup element.
 * @example
 * const optgroup = OptGroup({
 *      label: "Group 1",
 *      disabled: false,
 *      autoFocus: true,
 *      onChange: onChange,
 *      onInput: onInput,
 *      onInvalid: onInvalid,
 *      onFocus: onFocus,
 *      onBlur: onBlur,
 * });
 */
export const OptGroup = (options: OptionInterface): HTMLOptGroupElement => {
    const optGroupTag = Tag("optgroup", options) as HTMLOptGroupElement;
    const { label, disabled, autoFocus } = options;
    if (label) optGroupTag.label = label;
    if (disabled) optGroupTag.disabled = disabled;
    if (autoFocus) optGroupTag.autofocus = autoFocus;

    return optGroupTag;
};
