import React from "react";

export default function FAQ() {
  return (
    <div className="gap-6 p-28 px-3 max-w-6xl mx-auto">
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Is your service reliable?
        </div>
        <div className="collapse-content">
          <p>Our Services is reliable and no cause for alarm</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Can i purchase a property from you without future problem?
        </div>
        <div className="collapse-content">
          <p>
            Yes! You can purchase a property from us and the future insurrance
            guarrantee
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Is your renting service secure?
        </div>
        <div className="collapse-content">
          <p>Any House rent from us is secured and safety guarrantee</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Can I get a good land with C/O document from you?
        </div>
        <div className="collapse-content">
          <p>
            Yes! Any land we are selling out has C/O document and no harrashment
            by government
          </p>
        </div>
      </div>
    </div>
  );
}
