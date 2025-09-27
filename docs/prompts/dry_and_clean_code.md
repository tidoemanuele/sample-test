📋 **CODE CONSOLIDATION & DEDUPLICATION REQUEST**

  **COMPLIANCE CONFIRMED**: I will prioritize consolidation and reuse over creation of new logic.

  **OBJECTIVE**: Identify and eliminate duplicate/over-engineered code in [specific area/file] that was created during troubleshooting
  but is no longer needed.

  **MANDATORY PROCESS**:
  1. **ANALYZE EXISTING CODE**: Scan for duplicate logic, redundant functions, and over-engineered solutions
  2. **IDENTIFY CONSOLIDATION OPPORTUNITIES**:
     - Same constants/mappings defined multiple times
     - Redundant error handling paths
     - Custom logic that duplicates framework functionality
     - Temporary debugging code still present
  3. **CONSOLIDATE TO SINGLE SOURCE**:
     - Use framework constants instead of custom mappings
     - Eliminate redundant validation/conversion functions
     - Remove custom error descriptions when framework provides them
     - Keep only essential error handling paths
  4. **VALIDATE FUNCTIONALITY PRESERVED**: Ensure consolidation doesn't break existing behavior

  **SPECIFIC TARGETS TO LOOK FOR**:
  ❌ Duplicate error code mappings (magic numbers vs constants)
  ❌ Custom error messages overriding framework messages
  ❌ Redundant validation functions
  ❌ Multiple code paths doing the same thing
  ❌ Temporary debugging/logging code that became permanent
  ❌ Over-complex error handling when simple solutions exist

  **CONSOLIDATION RULES**:
  ✅ Use framework constants instead of magic numbers
  ✅ Prefer framework error messages over custom ones
  ✅ Eliminate redundant mapping/conversion functions
  ✅ Keep single source of truth for error codes/mappings
  ✅ Remove over-engineered temporary solutions
  ✅ Maintain only essential error handling logic

  **DELIVERABLES**:
  1. List of identified duplicate/redundant code
  2. Consolidation plan showing what gets removed/simplified
  3. Code changes that eliminate duplication
  4. Verification that functionality is preserved

  **CONTEXT**: Previous development involved troubleshooting that led to over-engineering. Now that solution is found, remove the
  scaffolding and temporary workarounds that are no longer needed.

  **VALIDATION CHECKPOINT**: Before suggesting changes, confirm:
  - [ ] Identified all duplicate logic patterns
  - [ ] Proposed consolidation maintains functionality
  - [ ] Removal of over-engineered solutions is justified
  - [ ] Single source of truth is established

  ---
  Example Usage for Your Scenario:
  📋 **CODE CONSOLIDATION REQUEST**

  **TARGET**: /Users/etido/Code/flutter/ott/nosi-ott-app-ott4all/packages/player/android/src/main/kotlin/pt/nos/player/player/FlutterEx
  oPlayerAdapter.kt

  **CONTEXT**: DRM error handling was over-engineered during troubleshooting. Now that we have the proper solution from the library
  developer, consolidate and remove redundant code.

  **SPECIFIC AREAS TO CONSOLIDATE**:
  - hand created description like: buildDrmErrorDescription(errorSource, httpErrorCode, bodyErrorCode, bodyErrorMessage),
  - Custom error descriptions overriding ExoPlayer's built-in messages
  - Redundant error code conversion functions
  - Multiple error handling paths for same scenarios

  Apply the consolidation process to eliminate over-engineering while preserving functionality.