import React from 'react';

export default function KitchenSink() {
  return (
    <main>
      <nav id="navbar">
        <h2>
          <a href="#navbar">#</a> Navbar
        </h2>
        <ul>
          <li>
            <a href="#navbar">Home</a>
          </li>
          <li>
            <a href="#form">Form</a>
          </li>
          <li>
            <a href="#text">Text</a>
          </li>
          <li>
            <a href="#image">Image</a>
          </li>
          <li>
            <a href="#blocks">Blocks</a>
          </li>
          <li>
            <a href="#table">Table</a>
          </li>
          <li>
            <a href="#blocks">Blocks</a>
          </li>
          <li>
            <a href="#other">Other</a>
            <ul>
              <li>
                <a href="#advanced-forms">Advanced Forms</a>
              </li>
              <li>
                <a href="#multimedia">Multimedia</a>
              </li>
              <li>
                <a href="#keyboard">Keyboard</a>
              </li>
              <li>
                <a href="#details">Details</a>
              </li>
              <li>
                <a href="#footer">Footer</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <section id="form">
        <h1>
          <a href="#form">#</a> Form
        </h1>
        <form>
          <fieldset>
            <legend>Legend</legend>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <div>
              <label htmlFor="gender">Dropdown</label>
              <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label>Radio Buttons</label>
              <div>
                <label>
                  <input name="abc" id="1" type="radio" /> Label 1
                </label>
              </div>
              <div>
                <label>
                  <input name="abc" id="2" type="radio" /> Label 2
                </label>
              </div>
              <div>
                <label>
                  <input name="abc" id="3" type="radio" /> Label 3
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="url">URL Input</label>
              <input type="url" placeholder="http://mrmrs.cc" />
            </div>
            <div>
              <label>Text area</label>
              <textarea></textarea>
            </div>
            <div>
              <label>
                <input type="checkbox" /> This is a checkbox.
              </label>
              <label>
                <input type="checkbox" disabled /> This is a disabled checkbox.
              </label>
              <label>
                <input type="checkbox" required checked /> This is a required
                checkbox.
              </label>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>
      <hr />
      <section id="text">
        <h1>
          <a href="#text">#</a> Text
        </h1>
        <h1>Lorem Ipsum h1</h1>
        <h2>Lorem Ipsum h2</h2>
        <h3>Lorem Ipsum h3</h3>
        <h4>Lorem Ipsum h4</h4>
        <h5>Lorem Ipsum h5</h5>
        <h6>Lorem Ipsum h6</h6>
        <a href="javascript:void(0);">
          <p>Sample text link</p>
        </a>
        <ul>
          <li>First Item</li>
          <li>Second Item</li>
        </ul>
        <ol>
          <li>First Item</li>
          <li>Second Item</li>
        </ol>
        <p>
          This is p text with <sub>subscript</sub> and <sup>superscript</sup>{' '}
          and
          <small>small</small> and <strong>strong</strong> and <em>em</em> and
          <s>strikthrough</s> and <u>underline</u> and <ins>insert</ins> and and
          kbd (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>)
        </p>
        <p>
          <var>f</var>(<var>x</var>) = <var>a</var>
          <sub>0</sub> + <var>a</var>
          <sub>1</sub>
          <var>x</var> +<var>a</var>
          <sub>2</sub>
          <var>x</var>
          <sup>2</sup>, where <var>a</var>
          <sup>2</sup> ≠ 0
        </p>

        <p>
          p. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <span>
          span. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </span>
      </section>
      <section id="image">
        <h1>
          <a href="#image">#</a> Images
        </h1>
        <figure>
          <img src="https://via.placeholder.com/960x200" alt="Figure Example" />
          <figcaption>This is a figcaption for 960x200</figcaption>
        </figure>
        <figure>
          <img
            src="https://via.placeholder.com/2500x200"
            alt="Figure Example"
          />
          <figcaption>This is an oversized image</figcaption>
        </figure>
      </section>
      <section id="blocks">
        <h1>
          <a href="#blocks">#</a> Blocks
        </h1>
        <pre>
          $ <kbd>ls -gto</kbd>
          total 104 -rw-r--r-- 1 10779 Jun 5 16:24 index.html -rw-r--r-- 1 1255
          Jun 5 16:00 _config.yml drwxr-xr-x 11 374 Jun 5 15:57 _site -rw-r--r--
          1 1597 Jun 5 14:16 README.md drwxr-xr-x 5 170 Jun 5 14:15 _sass
        </pre>
        <blockquote>
          The making of good software takes time. If you try to make it take
          less time, it will take more time.
          <footer>— Douglas Crockford</footer>
        </blockquote>
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        ></iframe>
      </section>
      <section id="table">
        <h1>
          <a href="#table">#</a> Table
        </h1>
        <table>
          <caption>This is a small table</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#888-32dd</td>
              <td>Sample Name</td>
              <td>17 May, 1984</td>
              <td>999 Spruce Lane, Somewhere, CA 94101</td>
            </tr>
            <tr>
              <td>#888-32dd</td>
              <td>Sample Name</td>
              <td>17 May, 1984</td>
              <td>999 Spruce Lane, Somewhere, CA 94101</td>
            </tr>
            <tr>
              <td>#888-32dd</td>
              <td>Sample Name</td>
              <td>17 May, 1984</td>
              <td>999 Spruce Lane, Somewhere, CA 94101</td>
            </tr>
            <tr>
              <td>#888-32dd</td>
              <td>Sample Name</td>
              <td>17 May, 1984</td>
              <td>999 Spruce Lane, Somewhere, CA 94101</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>This is a big table</caption>
          <thead>
            <tr>
              <th>Lorem ipsum</th>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Lorem ipsum</th>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
            </tr>
            <tr>
              <th>Lorem ipsum</th>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
            </tr>
            <tr>
              <th>Lorem ipsum</th>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
            </tr>
            <tr>
              <th>Lorem ipsum</th>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section id="other">
        <h1>
          <a href="#other">#</a> Other
        </h1>

        <section id="advanced-forms">
          <h3>
            <a href="#advanced-forms">#</a> Advanced Forms
          </h3>
          <datalist id="datalist-example">
            <option value="foo"></option>
            <option value="bar"></option>
            <option value="baz"></option>
          </datalist>

          <fieldset>
            <legend>Fieldset</legend>
            <button type="button">Button</button>
          </fieldset>
          <fieldset disabled>
            <legend>Disabled Fieldset</legend>
            <button type="button">Button</button>
          </fieldset>

          <form>
            <fieldset>
              <legend>Checkboxes</legend>
              <label>
                <input type="checkbox" />
                Checkbox
              </label>
              <label>
                <input type="checkbox" checked />
                Checked
              </label>
              <label>
                <input type="checkbox" disabled />
                Disabled
              </label>
              <label>
                <input type="checkbox" required />
                Required
              </label>
            </fieldset>
            <label>
              Text
              <input />
            </label>
            <label>
              Required
              <input required />
            </label>
            <label>
              Color
              <input type="color" />
            </label>
            <label>
              File
              <input type="file" />
            </label>
            <label>
              <input type="radio" name="example" />
              Radio
            </label>
            <label>
              <input type="radio" name="example" checked />
              Checked
            </label>
            <label>
              <input type="radio" name="example" disabled />
              Disabled
            </label>
            <label>
              Range
              <input type="range" value="5" min="0" max="10" />
            </label>
            <label>
              Select
              <select>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
                <optgroup label="Example">
                  <option>Example</option>
                  <option>Example</option>
                  <option>Example</option>
                </optgroup>
                <optgroup label="Disabled" disabled>
                  <option>Disabled</option>
                  <option>Disabled</option>
                  <option>Disabled</option>
                </optgroup>
              </select>
            </label>
            <label>
              Multiple select
              <select multiple>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
                <optgroup label="Example">
                  <option>Example</option>
                  <option>Example</option>
                  <option>Example</option>
                </optgroup>
                <optgroup label="Disabled" disabled>
                  <option>Disabled</option>
                  <option>Disabled</option>
                  <option>Disabled</option>
                </optgroup>
              </select>
            </label>
            <label>
              Textarea
              <textarea></textarea>
            </label>
            <button type="reset">Reset</button>
            <button>Submit</button>
          </form>
          <meter value="0" min="0" max="100" low="25" high="75" optimum="100">
            0%
          </meter>
          <meter value="10" min="0" max="100" low="25" high="75" optimum="100">
            10%
          </meter>
          <meter value="50" min="0" max="100" low="25" high="75" optimum="100">
            50%
          </meter>
          <meter value="100" min="0" max="100" low="25" high="75" optimum="100">
            100%
          </meter>
          <progress value="50" max="100">
            50%
          </progress>
          <progress value="100" max="100">
            100%
          </progress>

          <select>
            <option>Example</option>
            <option>Example</option>
            <option>Example</option>
            <optgroup label="Example">
              <option>Example</option>
              <option>Example</option>
              <option>Example</option>
            </optgroup>
            <optgroup label="Disabled" disabled>
              <option>Disabled</option>
              <option>Disabled</option>
              <option>Disabled</option>
            </optgroup>
          </select>

          <select disabled>
            <option>Disabled</option>
          </select>

          <select multiple>
            <option>Example</option>
            <option>Example</option>
            <option>Example</option>
            <optgroup label="Example">
              <option>Example</option>
              <option>Example</option>
              <option>Example</option>
            </optgroup>
            <optgroup label="Disabled" disabled>
              <option>Disabled</option>
              <option>Disabled</option>
              <option>Disabled</option>
            </optgroup>
          </select>
        </section>

        <section id="multimedia">
          <h3>
            <a href="#multimedia">#</a> Multimedia
          </h3>

          <audio controls src="/t-rex-roar.mp3"></audio>

          <map name="infographic">
            <area
              shape="poly"
              coords="130,147,200,107,254,219,130,228"
              href="https://developer.mozilla.org/docs/Web/HTML"
              alt="HTML"
            />
            <area
              shape="poly"
              coords="130,147,130,228,6,219,59,107"
              href="https://developer.mozilla.org/docs/Web/CSS"
              alt="CSS"
            />
            <area
              shape="poly"
              coords="130,147,200,107,130,4,59,107"
              href="https://developer.mozilla.org/docs/Web/JavaScript"
              alt="JavaScript"
            />
          </map>
          <img
            useMap="#infographic"
            width="260"
            height="232"
            src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png"
            alt="MDN infographic"
          />

          <video controls loop src="/flower.webm"></video>
        </section>

        <section id="keyboard">
          <h3>
            <a href="#keyboard">#</a> Keyboard
          </h3>
          <kbd>Enter</kbd>
          <br />
          <kbd>Ctrl</kbd> + <kbd>C</kbd>
          <br />
          <kbd>
            <kbd>Ctrl</kbd> + <kbd>V</kbd>
          </kbd>
          <p>
            <kbd>`</kbd>
            <kbd>1</kbd>
            <kbd>2</kbd>
            <kbd>3</kbd>
            <kbd>4</kbd>
            <kbd>5</kbd>
            <kbd>6</kbd>
            <kbd>7</kbd>
            <kbd>8</kbd>
            <kbd>9</kbd>
            <kbd>0</kbd>
            <kbd>-</kbd>
            <kbd>=</kbd>
            <kbd>Bkspc</kbd>
          </p>
          <p>
            <kbd>Tab</kbd>
            <kbd>q</kbd>
            <kbd>w</kbd>
            <kbd>e</kbd>
            <kbd>r</kbd>
            <kbd>t</kbd>
            <kbd>y</kbd>
            <kbd>u</kbd>
            <kbd>i</kbd>
            <kbd>o</kbd>
            <kbd>p</kbd>
            <kbd>[</kbd>
            <kbd>]</kbd>
            <kbd>\</kbd>
          </p>
          <p>
            <kbd>Caps</kbd>
            <kbd>a</kbd>
            <kbd>s</kbd>
            <kbd>d</kbd>
            <kbd>f</kbd>
            <kbd>g</kbd>
            <kbd>h</kbd>
            <kbd>j</kbd>
            <kbd>k</kbd>
            <kbd>l</kbd>
            <kbd>;</kbd>
            <kbd>'</kbd>
            <kbd>Enter</kbd>
          </p>
          <p>
            <kbd>Shift</kbd>
            <kbd>z</kbd>
            <kbd>x</kbd>
            <kbd>c</kbd>
            <kbd>v</kbd>
            <kbd>b</kbd>
            <kbd>n</kbd>
            <kbd>m</kbd>
            <kbd>,</kbd>
            <kbd>.</kbd>
            <kbd>/</kbd>
            <kbd>Shift</kbd>
          </p>
        </section>

        <section id="details">
          <h3>
            <a href="#details">#</a> Details
          </h3>

          <details>
            <summary>Details</summary>
            Something small enough to escape casual notice.
          </details>
        </section>

        <section id="footer">
          <h3>
            <a href="#footer">#</a> Footer
          </h3>

          <footer>
            <small>© 2014 Some company name</small>
            <address>email@email.com</address>
          </footer>
        </section>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
