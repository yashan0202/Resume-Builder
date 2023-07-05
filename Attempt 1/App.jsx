import React, { useState } from "react";

const ResumeBuilder = () => {
  // ...

  const Section = ({ section }) => {
    return (
      <div className="section">
        <span
          className="drag-handle"
          draggable
          onDragStart={(e) => handleDragStart(e, section.id)}
        >
          ☰
        </span>
        <input
          type="text"
          className="section-input"
          value={section.name}
          onChange={(e) =>
            handleEditSectionName(section.id, e.target.value)
          }
        />
        <button
          className={`toggle-btn ${section.enabled ? "active" : ""}`}
          onClick={() => handleToggleSection(section.id)}
        >
          {section.enabled ? "On" : "Off"}
        </button>
      </div>
    );
  };

  return (
    <div className="resume-builder">
      <h1 className="title">Resume Builder</h1>
      <div className="sections-container" onDragOver={handleDragOver}>
        {sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
      <button
        className={`save-btn ${isEdited ? "active" : ""}`}
        disabled={!isEdited}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default ResumeBuilder;
